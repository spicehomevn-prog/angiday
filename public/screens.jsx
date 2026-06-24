// Ăn Gì Đây? — Full app screens (6-step onboarding, home, favorites, settings)
// Composes Design System components; uses localStorage for persistence.
const { Button, Chip, Card, Badge, Input, Stepper, ProgressDots, TabBar, MealHeader, DishCard, Icon } = window.NGYDesignSystem_adcec4;

// ── Data ──────────────────────────────────────────────────────────────────────
const CUISINES = [
  {k:'viet', n:'Món Việt', e:'🍚'},
  {k:'a',    n:'Món Á (Hàn/Nhật/Trung)', e:'🍱'},
  {k:'tay',  n:'Món Tây', e:'🍝'},
];
const SEASONINGS = [
  {k:'nuoc_mam', n:'Nước mắm'}, {k:'muoi', n:'Muối'},   {k:'tieu', n:'Tiêu'},
  {k:'duong',    n:'Đường'},     {k:'toi',  n:'Tỏi'},     {k:'hanh', n:'Hành'},
  {k:'dau_an',   n:'Dầu ăn'},   {k:'xi_dau', n:'Xì dầu'},{k:'hat_nem', n:'Hạt nêm'},
  {k:'ot',       n:'Ớt'},        {k:'gung', n:'Gừng'},    {k:'sa', n:'Sả'},
];
const DIETS = [
  {k:'none',    n:'Không có yêu cầu gì', e:'🙂'},
  {k:'ankieng', n:'Ăn kiêng / giảm cân', e:'🥗'},
  {k:'itgv',    n:'Ít gia vị',           e:'🧂'},
  {k:'chay',    n:'Ăn chay',             e:'🥦'},
  {k:'canxi',   n:'Bổ sung canxi',       e:'🦴'},
  {k:'tduong',  n:'Thực dưỡng',          e:'🌾'},
];

const K_PROFILE  = 'angiday:profile';
const K_FAV      = 'angiday:favorites';
const K_TODAY    = 'angiday:today';
const K_PEXELS   = 'angiday:pexelskey';
const K_IMGCACHE = 'angiday:imgcache';

// ── Storage ───────────────────────────────────────────────────────────────────
const Store = {
  get(k)    { try { const v = localStorage.getItem(k); return v == null ? null : JSON.parse(v); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  del(k)    { try { localStorage.removeItem(k); } catch {} },
};

// ── Pexels image loader ───────────────────────────────────────────────────────
async function fetchPexelsImg(query, directKey) {
  // Try Netlify proxy first (works on production without exposing the key)
  try {
    const r = await fetch(`/.netlify/functions/pexels?query=${encodeURIComponent(query)}`);
    if (r.ok) {
      const d = await r.json();
      if (d.photos?.[0]?.src?.large2x) return d.photos[0].src.large2x;
    }
  } catch {}
  // Fall back to direct Pexels API with user-stored key
  if (!directKey) return null;
  try {
    const r = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`, {
      headers: { Authorization: directKey },
    });
    if (!r.ok) return null;
    const d = await r.json();
    return d.photos?.[0]?.src?.large2x || null;
  } catch { return null; }
}

async function loadDishImages(ids, pexelsKey, currentCache, onUpdate) {
  const cache = { ...currentCache };
  let changed = false;
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    if (cache[id] !== undefined) continue;
    const dish = byId(id);
    if (!dish) continue;
    if (dish.img) { cache[id] = dish.img; changed = true; continue; }
    if (!dish.imgQ) { cache[id] = null; continue; }
    await new Promise(r => setTimeout(r, i * 130));
    const url = await fetchPexelsImg(dish.imgQ, pexelsKey);
    cache[id] = url || null;
    changed = true;
  }
  if (changed) {
    Store.set(K_IMGCACHE, cache);
    onUpdate({ ...cache });
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────────
const fmtVND    = (n) => (n || 0).toLocaleString('vi-VN');
const todayStr  = () => { const d = new Date(); return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`; };
const weekdayLabel = () => {
  const w = ['Chủ nhật','Thứ hai','Thứ ba','Thứ tư','Thứ năm','Thứ sáu','Thứ bảy'];
  const d = new Date();
  return `${w[d.getDay()]}, ${d.getDate()}/${d.getMonth()+1}`;
};
const byId = (id) => window.AGD_DISHES.find(d => d.id === id);

// ── Menu generation ───────────────────────────────────────────────────────────
function passHard(d, profile) {
  return !((profile.diet || []).includes('chay') && !d.chay);
}
function scoreDish(d, profile) {
  let s = 0;
  const diet = profile.diet || [], am = profile.cuisine || [];
  if (am.includes(d.am)) s += 3; else s -= 1;
  const tier = (profile.budget || 200000) < 120000 ? 1 : (profile.budget || 200000) < 280000 ? 2 : 3;
  if (d.cp <= tier) s += 2; else s -= (d.cp - tier) * 2;
  if (diet.includes('ankieng') && d.ankieng) s += 4;
  if (diet.includes('itgv')   && d.itgv)    s += 4;
  if (diet.includes('tduong') && d.tduong)  s += 4;
  if (diet.includes('tduong') && d.chay)    s += 1;
  if (diet.includes('canxi')  && d.canxi)   s += 3;
  return s + Math.random() * 3;
}
function pickFrom(cat, exclude, profile) {
  const p = profile || {};
  let pool = window.AGD_DISHES.filter(d => d.c === cat && passHard(d, p) && !exclude.includes(d.id));
  if (!pool.length) pool = window.AGD_DISHES.filter(d => d.c === cat && !exclude.includes(d.id));
  if (!pool.length) pool = window.AGD_DISHES.filter(d => d.c === cat);
  const sorted = pool.map(d => ({ d, s: scoreDish(d, p) })).sort((a, b) => b.s - a.s);
  const top    = sorted.slice(0, Math.min(4, sorted.length));
  return top[Math.floor(Math.random() * top.length)].d.id;
}
function generateDay(profile) {
  const u = [];
  const sang = pickFrom('sang', u, profile); u.push(sang);
  const tM   = pickFrom('man',  u, profile); u.push(tM);
  const tR   = pickFrom('rau',  u, profile); u.push(tR);
  const tC   = pickFrom('canh', u, profile); u.push(tC);
  const oM   = pickFrom('man',  u, profile); u.push(oM);
  const oR   = pickFrom('rau',  u, profile); u.push(oR);
  const oC   = pickFrom('canh', u, profile); u.push(oC);
  return { date: todayStr(), sang, trua: [tM, tR, tC], toi: [oM, oR, oC] };
}

// ── Macro bar ─────────────────────────────────────────────────────────────────
function MacroBar({ dishId }) {
  const m = window.AGD_MACROS?.[dishId];
  if (!m) return null;
  const items = [
    { icon:'assets/macro-flame.svg',   val:m.kcal, unit:'kcal' },
    { icon:'assets/macro-egg.svg',     val:m.p,    unit:'g đạm' },
    { icon:'assets/macro-bread.svg',   val:m.c,    unit:'g tinh bột' },
    { icon:'assets/macro-droplet.svg', val:m.f,    unit:'g béo' },
  ];
  return (
    <div style={{
      background:'var(--paper-2)', border:'1px solid var(--line)',
      borderRadius:'var(--r-sm)', padding:'7px 12px 5px',
      marginTop:6, marginBottom:3,
    }}>
      <div style={{ display:'flex', gap:4, justifyContent:'space-between' }}>
        {items.map(({ icon, val, unit }) => (
          <div key={unit} style={{ textAlign:'center', flex:1 }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:4 }}>
              <img src={icon} alt="" style={{ width:15, height:15, display:'block' }} />
              <span style={{ fontWeight:700, color:'var(--ink)', fontSize:13 }}>{val}</span>
            </div>
            <div style={{ fontSize:10, color:'var(--ink-soft)', marginTop:2 }}>{unit}</div>
          </div>
        ))}
      </div>
      <div style={{ textAlign:'center', fontSize:9.5, color:'var(--ink-soft)', opacity:.65, marginTop:5 }}>
        * Số liệu chỉ mang tính tham khảo
      </div>
    </div>
  );
}

// ── Shared styles ──────────────────────────────────────────────────────────────
const qTitle    = { fontFamily:'var(--font-display)', fontWeight:700, fontSize:22, textAlign:'center', margin:'0 0 4px', color:'var(--ink)' };
const qSub      = { textAlign:'center', color:'var(--ink-soft)', fontSize:14, margin:'0 0 20px' };
const chipWrap  = { display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center' };
const eyebrowSt = { fontWeight:700, fontSize:11.5, letterSpacing:'1.4px', textTransform:'uppercase', color:'var(--red)' };
const favRow    = { display:'flex', alignItems:'center', justifyContent:'space-between', gap:10,
                    background:'var(--paper-2)', border:'1px solid var(--line)',
                    borderRadius:'var(--r-md)', padding:'13px 14px', marginBottom:10 };
const miniBtn   = { width:36, height:36, borderRadius:'50%', display:'grid', placeItems:'center',
                    border:'none', cursor:'pointer', background:'var(--paper)', boxShadow:'var(--shadow-sm)' };

// ── Welcome ───────────────────────────────────────────────────────────────────
function WelcomeScreen({ onStart }) {
  return (
    <Card tone="warm" style={{ textAlign:'center', padding:'8px 22px 26px', overflow:'hidden' }}>
      <div style={{ fontSize:30, letterSpacing:6, opacity:.9, marginBottom:6 }}>🥬 🍚 🐟 🍅 🍗</div>
      <span className="agd-bob" style={{ fontSize:78, display:'inline-block', filter:'drop-shadow(0 10px 12px rgba(0,0,0,.10))' }}>🥢</span>
      <h1 style={{ fontFamily:'var(--font-display)', fontSize:33, margin:'12px 0 8px', color:'var(--red-deep)', lineHeight:1.1 }}>
        Hôm nay nhà mình<br/>ăn gì đây?
      </h1>
      <p style={{ color:'var(--ink-soft)', fontSize:15.5, margin:'0 auto 22px', maxWidth:330, lineHeight:1.55 }}>
        Để mình lo chuyện nghĩ món. Cho mình biết vài điều về gia đình, rồi mỗi ngày chỉ cần một cú chạm là có thực đơn cân bằng kèm công thức và video hướng dẫn nấu.
      </p>
      <Button variant="primary" size="lg" block onClick={onStart}>Bắt đầu nào 🌷</Button>
    </Card>
  );
}

// ── Onboarding (6 steps) ──────────────────────────────────────────────────────
function OnboardingScreen({ initialDraft, onDone }) {
  const init = initialDraft || {};
  const [step,    setStep]    = React.useState(0);
  const [name,    setName]    = React.useState(init.name    || '');
  const [people,  setPeople]  = React.useState(init.people  || 4);
  const [budget,  setBudget]  = React.useState(init.budget  || 200000);
  const [cuisine, setCuisine] = React.useState(init.cuisine || ['viet']);
  const [pantry,  setPantry]  = React.useState(init.pantry  || ['nuoc_mam','muoi','tieu','duong','toi','hanh','dau_an','hat_nem']);
  const [diet,    setDiet]    = React.useState(init.diet    || ['none']);

  const toggleArr = (arr, set, v) =>
    set(arr.includes(v) ? (arr.length > 1 ? arr.filter(x => x !== v) : arr) : [...arr, v]);

  const toggleDiet = (v) => {
    if (v === 'none') return setDiet(['none']);
    const a = diet.filter(x => x !== 'none');
    const next = a.includes(v) ? a.filter(x => x !== v) : [...a, v];
    setDiet(next.length ? next : ['none']);
  };

  const total  = 6;
  const isLast = step === total - 1;

  const next = () => {
    if (step < total - 1) return setStep(step + 1);
    onDone({ name: name.trim(), people, budget, cuisine, pantry, diet });
  };

  const [rawBudget, setRawBudget] = React.useState(fmtVND(budget));
  const onBudgetChange = (e) => {
    const raw = e.target.value.replace(/\D/g, '');
    const n   = parseInt(raw) || 0;
    setBudget(n);
    setRawBudget(raw ? fmtVND(n) : '');
  };

  return (
    <div>
      <div style={{ marginBottom:16 }}><ProgressDots total={total} current={step} /></div>
      <Card key={step} className="agd-pop">

        {step === 0 && <>
          <span style={{ fontSize:44, textAlign:'center', display:'block', marginBottom:8 }}>👨‍👩‍👧‍👦</span>
          <h2 style={qTitle}>Gọi gia đình mình là gì nhỉ?</h2>
          <p style={qSub}>Để mình chào cho thân mật (có thể bỏ qua)</p>
          <div style={{ maxWidth:330, margin:'0 auto' }}>
            <Input value={name} onChange={e => setName(e.target.value)} placeholder="VD: nhà Bống, gia đình Minh..." maxLength={24} label="" />
          </div>
        </>}

        {step === 1 && <>
          <span style={{ fontSize:44, textAlign:'center', display:'block', marginBottom:8 }}>🍽️</span>
          <h2 style={qTitle}>Nhà mình có mấy người ăn?</h2>
          <p style={qSub}>Mình sẽ canh khẩu phần cho vừa</p>
          <Stepper value={people} onChange={setPeople} min={1} max={20} unit="người" />
        </>}

        {step === 2 && <>
          <span style={{ fontSize:44, textAlign:'center', display:'block', marginBottom:8 }}>💰</span>
          <h2 style={qTitle}>Ngân sách nấu ăn mỗi ngày?</h2>
          <p style={qSub}>Mình ưu tiên món hợp túi tiền nhà mình</p>
          <div style={{ maxWidth:330, margin:'0 auto' }}>
            <Input value={rawBudget} onChange={onBudgetChange} inputMode="numeric" placeholder="VD: 200.000" label="" />
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8, justifyContent:'center', marginTop:12 }}>
            {[80000, 150000, 250000, 400000].map(v => (
              <Chip key={v} selected={budget === v} onClick={() => { setBudget(v); setRawBudget(fmtVND(v)); }}>
                {fmtVND(v)}đ
              </Chip>
            ))}
          </div>
        </>}

        {step === 3 && <>
          <span style={{ fontSize:44, textAlign:'center', display:'block', marginBottom:8 }}>😋</span>
          <h2 style={qTitle}>Nhà mình thích món gì?</h2>
          <p style={qSub}>Chọn một hoặc nhiều loại</p>
          <div style={chipWrap}>
            {CUISINES.map(c => (
              <Chip key={c.k} selected={cuisine.includes(c.k)} onClick={() => toggleArr(cuisine, setCuisine, c.k)}>
                {c.e} {c.n}
              </Chip>
            ))}
          </div>
        </>}

        {step === 4 && <>
          <span style={{ fontSize:44, textAlign:'center', display:'block', marginBottom:8 }}>🧂</span>
          <h2 style={qTitle}>Tủ gia vị nhà mình có gì?</h2>
          <p style={qSub}>Mình sẽ nhắc mua thêm thứ còn thiếu</p>
          <div style={chipWrap}>
            {SEASONINGS.map(s => (
              <Chip key={s.k} tone="green" selected={pantry.includes(s.k)} onClick={() => toggleArr(pantry, setPantry, s.k)}>
                {s.n}
              </Chip>
            ))}
          </div>
        </>}

        {step === 5 && <>
          <span style={{ fontSize:44, textAlign:'center', display:'block', marginBottom:8 }}>🥗</span>
          <h2 style={qTitle}>Có yêu cầu dinh dưỡng thêm không?</h2>
          <p style={qSub}>Chọn những điều phù hợp với nhà mình</p>
          <div style={chipWrap}>
            {DIETS.map(d => (
              <Chip key={d.k} selected={diet.includes(d.k)} onClick={() => toggleDiet(d.k)}>
                {d.e} {d.n}
              </Chip>
            ))}
          </div>
        </>}

        <div style={{ display:'flex', gap:10, marginTop:24 }}>
          {step > 0 && <Button variant="line" style={{ flex:1 }} onClick={() => setStep(step - 1)}>Quay lại</Button>}
          <Button variant="primary" style={{ flex:1 }} onClick={next}>
            {isLast ? 'Xong, vào bếp thôi! 🍳' : 'Tiếp tục →'}
          </Button>
        </div>
      </Card>
    </div>
  );
}

// ── Home ──────────────────────────────────────────────────────────────────────
function HomeScreen({ profile, menu, rolling, onRoll, favorites, onFav, onSave, onSwap, imgCache, onImgCacheUpdate }) {
  const [open, setOpen] = React.useState({});

  React.useEffect(() => {
    if (!menu) return;
    const ids = [menu.sang, ...menu.trua, ...menu.toi];
    const pexelsKey = Store.get(K_PEXELS) || '';
    loadDishImages(ids, pexelsKey, imgCache || {}, onImgCacheUpdate || (() => {}));
  }, [menu]);

  const allIds = menu ? [menu.sang, ...menu.trua, ...menu.toi] : [];
  const diet   = profile.diet || [];

  const badges = (() => {
    if (!menu) return null;
    const ds = allIds.map(byId).filter(Boolean);
    const b  = [];
    if (ds.some(d => ['man','sang'].includes(d.c)))           b.push(<Badge key="dam"  tone="gold"><Icon name="drumstick" size={13} /> Đủ đạm</Badge>);
    if (ds.some(d => d.c === 'rau'))                           b.push(<Badge key="rau"  tone="green"><Icon name="leaf" size={13} /> Có rau xanh</Badge>);
    if (ds.some(d => d.c === 'canh'))                          b.push(<Badge key="cnh"  tone="green"><Icon name="soup" size={13} /> Có canh</Badge>);
    if (diet.includes('canxi') && ds.some(d => d.canxi))      b.push(<Badge key="cx"   tone="plum">🦴 Giàu canxi</Badge>);
    if (diet.includes('chay'))                                 b.push(<Badge key="ch"   tone="green">🌱 Thực đơn chay</Badge>);
    if (diet.includes('ankieng'))                              b.push(<Badge key="ak"   tone="gold">🥗 Ưu tiên ít calo</Badge>);
    if (diet.includes('tduong'))                               b.push(<Badge key="td"   tone="plum">🌾 Hướng thực dưỡng</Badge>);
    return b;
  })();

  const dietLabel = diet.filter(k => k !== 'none').map(k => DIETS.find(d => d.k === k)?.n).filter(Boolean).join(' · ');

  return (
    <div>
      <div style={{ marginBottom:14 }}>
        <div style={eyebrowSt}>{weekdayLabel()}</div>
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:25, color:'var(--red-deep)', margin:'2px 0 0' }}>
          Chào nhà {profile.name || 'mình'}! 👋
        </h2>
        <div style={{ color:'var(--ink-soft)', fontSize:13, marginTop:3 }}>
          {profile.people} người · {fmtVND(profile.budget)}đ/ngày{dietLabel ? ` · ${dietLabel}` : ''}
        </div>
      </div>

      <Card tone="warm" style={{ textAlign:'center' }}>
        <span className={rolling ? 'agd-shake' : ''} style={{ display:'inline-flex', color:'var(--red)' }}>
          <Icon name="dice" size={42} strokeWidth={1.8} />
        </span>
        <div style={{ fontWeight:800, fontFamily:'var(--font-display)', fontSize:25, margin:'6px 0 2px' }}>
          Bữa nay ăn gì ta?
        </div>
        <p style={{ color:'var(--ink-soft)', fontSize:14, margin:'2px 0 18px' }}>
          Bấm để lắc ra thực đơn vừa ý cho cả nhà
        </p>
        <Button variant="primary" size="lg" block onClick={onRoll}>
          {menu ? 'Lắc lại thực đơn 🎲' : 'Lắc thực đơn 🎲'}
        </Button>
      </Card>

      {menu && (
        <Card className="agd-pop" style={{ marginTop:16 }}>
          {badges && badges.length > 0 && (
            <div style={{ display:'flex', flexWrap:'wrap', gap:7, justifyContent:'center', marginBottom:16 }}>
              {badges}
            </div>
          )}

          {[
            ['sunrise', 'Bữa sáng', [menu.sang]],
            ['sun',     'Bữa trưa',  menu.trua],
            ['moon',    'Bữa tối',   menu.toi],
          ].map(([ic, label, ids]) => (
            <div key={label} style={{ marginTop:14 }}>
              <MealHeader icon={ic} title={label} />
              {ids.map(id => {
                const d = byId(id);
                if (!d) return null;
                return (
                  <div key={id} style={{ marginBottom:13 }}>
                    <DishCard
                      name={d.t}
                      emoji={d.e}
                      image={(imgCache && imgCache[id] !== undefined) ? imgCache[id] : d.img}
                      time={d.time}
                      cost={d.cost}
                      vegetarian={d.chay}
                      favorite={favorites.some(f => f.id === id)}
                      open={!!open[id]}
                      onToggle={()  => setOpen(o => ({ ...o, [id]: !o[id] }))}
                      onFavorite={() => onFav(id)}
                      onSwap={() => onSwap(id)}
                      servingNote={`cho ${profile.people} người`}
                      ingredients={d.nl}
                      steps={d.cn}
                      videoUrl={d.yt}
                      tipNote={d.dd}
                    />
                    <MacroBar dishId={id} />
                  </div>
                );
              })}
            </div>
          ))}

          <div style={{ display:'flex', gap:10, marginTop:20 }}>
            <Button variant="soft" style={{ flex:1 }} onClick={onRoll}>
              <Icon name="refresh" size={16} /> Lắc lại
            </Button>
            <Button variant="primary" style={{ flex:1 }} onClick={onSave}>
              <Icon name="heart" size={16} /> Lưu hôm nay
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}

// ── Favorites ─────────────────────────────────────────────────────────────────
function FavoritesScreen({ favorites, onRemove, onReuseDay }) {
  const days   = favorites.filter(f => f.type === 'day');
  const dishes = favorites.filter(f => f.type === 'dish');

  return (
    <div>
      <div style={{ marginBottom:14 }}>
        <div style={eyebrowSt}>Bộ sưu tập</div>
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:25, color:'var(--red-deep)', margin:'2px 0 0' }}>Đã lưu ❤️</h2>
        <div style={{ color:'var(--ink-soft)', fontSize:13, marginTop:3 }}>Những món & thực đơn cả nhà thích</div>
      </div>

      {favorites.length === 0 ? (
        <Card style={{ textAlign:'center', color:'var(--ink-soft)', padding:'34px 12px' }}>
          <div style={{ fontSize:50 }}>🍽️</div>
          <p style={{ margin:'12px 0 0' }}>Chưa có gì được lưu.<br/>Lắc thực đơn rồi bấm ❤️ để cất lại nha!</p>
        </Card>
      ) : (
        <Card>
          {days.map((f, i) => (
            <div key={i} style={favRow}>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:15 }}>📅 Thực đơn {f.date}</div>
                <div style={{ fontSize:12.5, color:'var(--ink-soft)', marginTop:2, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
                  {(f.titles || []).join(' · ')}
                </div>
              </div>
              <div style={{ display:'flex', gap:6, flexShrink:0 }}>
                {onReuseDay && (
                  <button style={miniBtn} title="Xem lại" onClick={() => onReuseDay(f)}>
                    <Icon name="refresh" size={15} />
                  </button>
                )}
                <button style={miniBtn} title="Xoá" onClick={() => onRemove(i)}>
                  <Icon name="trash" size={15} />
                </button>
              </div>
            </div>
          ))}

          {dishes.map((f, i) => {
            const d = byId(f.id);
            return (
              <div key={i} style={favRow}>
                <div>
                  <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:15 }}>
                    {d?.e} {d?.t}
                  </div>
                  <div style={{ fontSize:12.5, color:'var(--ink-soft)', marginTop:2 }}>Món ăn yêu thích</div>
                </div>
                <button style={miniBtn} title="Xoá" onClick={() => onRemove(favorites.indexOf(f))}>
                  <Icon name="trash" size={15} />
                </button>
              </div>
            );
          })}
        </Card>
      )}
    </div>
  );
}

// ── Settings ──────────────────────────────────────────────────────────────────
function SettingsScreen({ profile, onEdit, onReset }) {
  const dietText = (profile.diet || [])
    .filter(k => k !== 'none')
    .map(k => DIETS.find(d => d.k === k)?.n)
    .filter(Boolean)
    .join(', ') || 'không';

  const [pexelsKey, setPexelsKey] = React.useState(() => Store.get(K_PEXELS) || '');
  const [keySaved, setKeySaved]   = React.useState(false);
  const saveKey = () => {
    const k = pexelsKey.trim();
    if (k) Store.set(K_PEXELS, k); else Store.del(K_PEXELS);
    Store.del(K_IMGCACHE);
    setKeySaved(true);
    setTimeout(() => setKeySaved(false), 2200);
  };

  return (
    <div>
      <div style={{ marginBottom:14 }}>
        <div style={eyebrowSt}>Tùy chỉnh</div>
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:25, color:'var(--red-deep)', margin:'2px 0 0' }}>Cài đặt ⚙️</h2>
      </div>

      <Card>
        <div style={{ marginBottom:4 }}>
          <h4 style={{ fontFamily:'var(--font-display)', fontSize:16, margin:'0 0 6px' }}>👨‍👩‍👧 Thông tin gia đình</h4>
          <p style={{ fontSize:13, color:'var(--ink-soft)', margin:'0 0 3px' }}>
            {profile.name ? `${profile.name} · ` : ''}{profile.people} người · {fmtVND(profile.budget)}đ/ngày
          </p>
          <p style={{ fontSize:13, color:'var(--ink-soft)', margin:'0 0 12px' }}>
            Dinh dưỡng: {dietText}
          </p>
          <Button variant="ghost" block onClick={onEdit}>Chỉnh sửa thông tin gia đình</Button>
        </div>

        <hr style={{ border:'none', borderTop:'1px solid var(--line)', margin:'20px 0' }} />

        <div>
          <h4 style={{ fontFamily:'var(--font-display)', fontSize:16, margin:'0 0 4px' }}>
            <Icon name="video" size={16} style={{ display:'inline', verticalAlign:'middle', marginRight:6 }} />
            Ảnh món ăn (Pexels)
          </h4>
          <p style={{ fontSize:13, color:'var(--ink-soft)', margin:'0 0 10px', lineHeight:1.5 }}>
            Dán API key Pexels để tải ảnh thật cho mỗi món. Lấy key miễn phí tại{' '}
            <a href="https://www.pexels.com/api/" target="_blank" rel="noopener" style={{ color:'var(--red-deep)' }}>pexels.com/api</a>.
          </p>
          <Input
            value={pexelsKey}
            onChange={e => setPexelsKey(e.target.value)}
            placeholder="Dán Pexels API key vào đây..."
            label=""
            type="password"
          />
          <div style={{ marginTop:8 }}>
            <Button variant={keySaved ? 'soft' : 'ghost'} block onClick={saveKey}>
              {keySaved ? '✓ Đã lưu — lắc lại thực đơn để tải ảnh mới' : 'Lưu key & xoá cache ảnh'}
            </Button>
          </div>
        </div>

        <hr style={{ border:'none', borderTop:'1px solid var(--line)', margin:'20px 0' }} />

        <div>
          <h4 style={{ fontFamily:'var(--font-display)', fontSize:16, margin:'0 0 6px' }}>🗑️ Đặt lại</h4>
          <p style={{ fontSize:13, color:'var(--ink-soft)', margin:'0 0 12px' }}>
            Xoá toàn bộ dữ liệu và bắt đầu lại từ đầu.
          </p>
          <Button variant="line" block onClick={onReset}>Đặt lại ứng dụng</Button>
        </div>

        <hr style={{ border:'none', borderTop:'1px solid var(--line)', margin:'20px 0' }} />

        <div style={{ textAlign:'center', color:'var(--ink-soft)', fontSize:11.5, lineHeight:1.6 }}>
          Ảnh từ{' '}
          <a href="https://www.pexels.com" target="_blank" rel="noopener" style={{ color:'var(--red-deep)' }}>Pexels</a>
          {' '}·{' '}
          <a href="https://commons.wikimedia.org" target="_blank" rel="noopener" style={{ color:'var(--red-deep)' }}>Wikimedia Commons</a>.<br/>
          Ăn Gì Đây? — người bạn nhỏ trong căn bếp 🧡
        </div>
      </Card>
    </div>
  );
}

// ── Search (by ingredient) ────────────────────────────────────────────────────
function searchByIngredient(query, profile) {
  if (!query.trim()) return [];
  const q = query.trim().toLowerCase();
  const prefCuisines = profile?.cuisine || [];
  return window.AGD_DISHES
    .filter(d => d.nl.some(ing => ing.toLowerCase().includes(q)))
    .sort((a, b) => {
      const aScore = prefCuisines.includes(a.am) ? 1 : 0;
      const bScore = prefCuisines.includes(b.am) ? 1 : 0;
      return bScore - aScore;
    });
}

const CUISINE_LABELS = { viet: '🇻🇳 Việt', a: '🌏 Á', tay: '🌍 Tây' };

function SearchScreen({ profile, favorites, onFav, imgCache, onImgCacheUpdate }) {
  const [query,         setQuery]         = React.useState('');
  const [cuisineFilter, setCuisineFilter] = React.useState(null);
  const [open,          setOpen]          = React.useState({});

  const allResults = React.useMemo(
    () => searchByIngredient(query, profile),
    [query]
  );

  const resultCuisines = React.useMemo(
    () => [...new Set(allResults.map(d => d.am))],
    [allResults]
  );

  const results = cuisineFilter
    ? allResults.filter(d => d.am === cuisineFilter)
    : allResults;

  React.useEffect(() => { setCuisineFilter(null); }, [query]);

  React.useEffect(() => {
    if (!allResults.length) return;
    const pexelsKey = Store.get(K_PEXELS) || '';
    loadDishImages(allResults.map(d => d.id), pexelsKey, imgCache || {}, onImgCacheUpdate || (() => {}));
  }, [allResults]);

  return (
    <div>
      <div style={{ marginBottom:14 }}>
        <div style={eyebrowSt}>Tìm kiếm</div>
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:25, color:'var(--red-deep)', margin:'2px 0 0' }}>
          Tìm món theo nguyên liệu 🧺
        </h2>
        <div style={{ color:'var(--ink-soft)', fontSize:13, marginTop:3 }}>
          Nhập nguyên liệu chính, mình sẽ gợi ý món phù hợp
        </div>
      </div>

      <Card>
        <Input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="VD: thịt bò, cá, trứng, đậu hũ..."
          label=""
        />
      </Card>

      {!query.trim() ? (
        <Card style={{ textAlign:'center', color:'var(--ink-soft)', padding:'34px 12px', marginTop:14 }}>
          <div style={{ fontSize:50 }}>🧺</div>
          <p style={{ margin:'12px 0 0', lineHeight:1.6 }}>
            Nhập nguyên liệu chính muốn dùng,<br/>mình sẽ gợi ý món phù hợp nhé!
          </p>
        </Card>
      ) : (
        <div style={{ marginTop:14 }}>
          {allResults.length === 0 ? (
            <Card style={{ textAlign:'center', color:'var(--ink-soft)', padding:'34px 12px' }}>
              <div style={{ fontSize:50 }}>🥲</div>
              <p style={{ margin:'12px 0 0', lineHeight:1.6 }}>
                Chưa có món nào dùng nguyên liệu này<br/>trong kho của mình.
              </p>
              <a
                href={`https://www.google.com/search?q=công+thức+nấu+${encodeURIComponent(query.trim())}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display:'inline-block', marginTop:16 }}
              >
                <Button variant="ghost">
                  <Icon name="bulb" size={16} /> Tìm công thức trên Google
                </Button>
              </a>
            </Card>
          ) : (
            <>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
                <span style={eyebrowSt}>
                  Tìm thấy {results.length}{cuisineFilter ? `/${allResults.length}` : ''} món có "{query.trim()}"
                </span>
              </div>

              {resultCuisines.length > 1 && (
                <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:14 }}>
                  <Chip selected={cuisineFilter === null} onClick={() => setCuisineFilter(null)}>
                    Tất cả
                  </Chip>
                  {resultCuisines.map(am => (
                    <Chip
                      key={am}
                      selected={cuisineFilter === am}
                      onClick={() => setCuisineFilter(f => f === am ? null : am)}
                    >
                      {CUISINE_LABELS[am] || am}
                    </Chip>
                  ))}
                </div>
              )}

              {results.map(d => (
                <div key={d.id} style={{ marginBottom:13 }}>
                  <DishCard
                    name={d.t}
                    emoji={d.e}
                    image={(imgCache && imgCache[d.id] !== undefined) ? imgCache[d.id] : d.img}
                    time={d.time}
                    cost={d.cost}
                    vegetarian={d.chay}
                    favorite={favorites.some(f => f.id === d.id)}
                    open={!!open[d.id]}
                    onToggle={() => setOpen(o => ({ ...o, [d.id]: !o[d.id] }))}
                    onFavorite={() => onFav(d.id)}
                    servingNote={`cho ${profile.people} người`}
                    ingredients={d.nl}
                    steps={d.cn}
                    videoUrl={d.yt}
                    tipNote={d.dd}
                  />
                  <MacroBar dishId={d.id} />
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}

// ── Exports for inline script ─────────────────────────────────────────────────
Object.assign(window, {
  WelcomeScreen, OnboardingScreen, HomeScreen, FavoritesScreen, SettingsScreen, SearchScreen,
  byId, pickFrom, generateDay, loadDishImages,
  Store, K_PROFILE, K_FAV, K_TODAY, K_PEXELS, K_IMGCACHE, todayStr,
});
