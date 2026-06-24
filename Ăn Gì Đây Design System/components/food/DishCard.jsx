import React from 'react';
import { Icon } from '../icons/Icon';

/**
 * DishCard — the signature card. A photo-or-emoji cover carries the cooking
 * time / cost tags, a favourite heart and a swap button, with the dish name
 * overlaid. Click the cover to expand the recipe (ingredients + steps).
 */
export function DishCard({
  name,
  emoji,
  image,
  time,
  cost = 1,
  vegetarian = false,
  favorite = false,
  open = false,
  onToggle,
  onFavorite,
  onSwap,
  ingredients = [],
  steps = [],
  videoUrl,
  tipNote,
  buyNote,
  servingNote,
  style,
}) {
  const hasImg = Boolean(image);

  const mini = {
    width: 36,
    height: 36,
    borderRadius: '50%',
    display: 'grid',
    placeItems: 'center',
    fontSize: 15,
    border: 'none',
    cursor: 'pointer',
    background: 'rgba(255,255,255,.94)',
    boxShadow: 'var(--shadow-sm)',
    transition: 'transform var(--dur-fast) var(--ease)',
  };
  const ctag = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    background: 'rgba(255,255,255,.92)',
    color: 'var(--ink)',
    fontSize: '11.5px',
    fontWeight: 'var(--fw-semibold)',
    padding: '4px 9px',
    borderRadius: 'var(--r-pill)',
    boxShadow: 'var(--shadow-sm)',
  };

  return (
    <div style={{
      background: 'var(--card)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--r-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)',
      ...style,
    }}>
      {/* Cover */}
      <div
        role="button"
        tabIndex={0}
        onClick={onToggle}
        className="agd-focusable"
        style={{
          position: 'relative',
          height: 148,
          display: 'grid',
          placeItems: 'center',
          cursor: 'pointer',
          background: hasImg
            ? `linear-gradient(180deg,transparent 35%,rgba(40,22,12,.62)), url("${image}") center/cover`
            : 'linear-gradient(150deg, var(--gold-soft), var(--red-soft))',
        }}
      >
        {!hasImg && (
          Icon.names.includes(emoji)
            ? <Icon name={emoji} size={52} strokeWidth={1.6} style={{ color: 'var(--red-deep)', filter: 'drop-shadow(0 6px 8px rgba(0,0,0,.10))' }} />
            : <span style={{ fontSize: 58, filter: 'drop-shadow(0 6px 8px rgba(0,0,0,.12))' }}>{emoji}</span>
        )}

        {/* tags top-left */}
        <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', gap: 6 }}>
          {time && <span style={ctag}><Icon name="clock" size={13} strokeWidth={2.1} /> {time}</span>}
          <span style={ctag} aria-label={`mức giá ${cost}/3`}>
            {Array.from({ length: cost }).map((_, i) => <Icon key={i} name="dollar" size={13} strokeWidth={2.1} />)}
          </span>
          {vegetarian && <span style={ctag}><Icon name="leaf" size={13} strokeWidth={2.1} style={{ color: 'var(--green)' }} /></span>}
        </div>

        {/* actions top-right */}
        <div style={{ position: 'absolute', top: 10, right: 10, display: 'flex', gap: 7 }}>
          <button
            className="agd-mini"
            title="Lưu món"
            onClick={(e) => { e.stopPropagation(); onFavorite?.(); }}
            style={{ ...mini, ...(favorite ? { background: 'var(--red)', color: '#fff' } : { color: 'var(--red)' }) }}
          ><Icon name="heart" size={17} filled={favorite} strokeWidth={2.1} /></button>
          <button
            className="agd-mini"
            title="Đổi món khác"
            onClick={(e) => { e.stopPropagation(); onSwap?.(); }}
            style={{ ...mini, color: 'var(--ink)' }}
          ><Icon name="refresh" size={16} strokeWidth={2.1} /></button>
        </div>

        {/* title */}
        <div style={{
          position: 'absolute',
          left: 14,
          right: 14,
          bottom: hasImg ? 14 : 11,
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--fw-bold)',
          fontSize: 18,
          color: hasImg ? '#fff' : 'var(--ink)',
          textShadow: hasImg ? '0 1px 6px rgba(0,0,0,.4)' : 'none',
        }}>{name}</div>
      </div>

      {/* Recipe body */}
      <div style={{
        maxHeight: open ? 1200 : 0,
        overflow: 'hidden',
        transition: 'max-height var(--dur-expand) var(--ease)',
      }}>
        <div style={{ padding: '4px 16px 16px' }}>
          {ingredients.length > 0 && (
            <>
              <RecipeHeading><Icon name="basket" size={16} /> Nguyên liệu{servingNote && (
                <span style={{ color: 'var(--ink-soft)', fontWeight: 'var(--fw-medium)' }}> {servingNote}</span>
              )}</RecipeHeading>
              <ul style={listStyle}>
                {ingredients.map((x, i) => <li key={i} style={liStyle}>{x}</li>)}
              </ul>
            </>
          )}
          {steps.length > 0 && (
            <>
              <RecipeHeading><Icon name="chefHat" size={16} /> Cách nấu</RecipeHeading>
              <ol style={listStyle}>
                {steps.map((x, i) => <li key={i} style={liStyle}>{x}</li>)}
              </ol>
            </>
          )}
          {videoUrl && (
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="agd-focusable"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                marginTop: 12,
                padding: '12px 16px',
                borderRadius: 'var(--r-pill)',
                background: 'var(--red-soft)',
                color: 'var(--red-deep)',
                fontFamily: 'var(--font-body)',
                fontWeight: 'var(--fw-bold)',
                fontSize: 'var(--fs-sm)',
                textDecoration: 'none',
              }}
            >
              <span style={{
                display: 'grid',
                placeItems: 'center',
                width: 22,
                height: 22,
                borderRadius: '50%',
                background: 'var(--red)',
                color: '#fff',
              }}><Icon name="play" size={12} filled /></span>
              Xem video cách nấu
            </a>
          )}
          {tipNote && <Note bg="var(--green-soft)" color="#2c6b41" icon="bulb">{tipNote}</Note>}
          {buyNote && <Note bg="var(--gold-soft)" color="#8a5e0e" icon="basket">Cần mua thêm: {buyNote}</Note>}
        </div>
      </div>

      {/* Expand hint */}
      {!open && (
        <div
          onClick={onToggle}
          style={{
            textAlign: 'center',
            fontSize: 'var(--fs-xs)',
            color: 'var(--ink-soft)',
            padding: 9,
            cursor: 'pointer',
            borderTop: '1px dashed var(--line)',
          }}
        >Xem công thức ▾</div>
      )}
    </div>
  );
}

const listStyle = { margin: 0, paddingLeft: 20 };
const liStyle = { fontSize: 'var(--fs-sm)', lineHeight: 'var(--lh-relaxed)', marginBottom: 3 };

function RecipeHeading({ children }) {
  return (
    <h4 style={{
      fontSize: 'var(--fs-sm)',
      margin: '14px 0 6px',
      color: 'var(--green)',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-bold)',
    }}>{children}</h4>
  );
}

function Note({ bg, color, icon, children }) {
  return (
    <div style={{
      background: bg,
      color,
      borderRadius: 12,
      padding: '9px 12px',
      fontSize: 'var(--fs-xs)',
      marginTop: 8,
      display: 'flex',
      alignItems: 'flex-start',
      gap: 7,
    }}>
      {icon && <Icon name={icon} size={15} strokeWidth={2} style={{ marginTop: 1 }} />}
      <span>{children}</span>
    </div>
  );
}
