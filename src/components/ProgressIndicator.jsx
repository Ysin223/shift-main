export default function ProgressIndicator({ activeStep, total = 4 }) {
  return (
    <div className="progress-indicator" aria-label={`Step ${activeStep} of ${total}`}>
      {Array.from({ length: total }, (_, index) => {
        const step = index + 1;
        return <span key={step} className={step === activeStep ? 'progress-dot progress-dot--active' : 'progress-dot'} />;
      })}
    </div>
  );
}
