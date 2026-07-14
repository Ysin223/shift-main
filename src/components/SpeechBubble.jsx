export default function SpeechBubble({ children, compact = false }) {
  return <div className={`speech-bubble ${compact ? 'speech-bubble--compact' : ''}`}>{children}</div>;
}
