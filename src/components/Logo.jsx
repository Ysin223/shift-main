export default function Logo({ compact = false }) {
  return (
    <div className={`shift-logo ${compact ? 'shift-logo--compact' : ''}`} aria-label="SHIFT">
      SHIFT<span>.</span>
    </div>
  );
}
