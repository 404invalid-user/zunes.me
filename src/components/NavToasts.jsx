
import ToastsData from '@/data/toasts.json';
const toastClass = {
  background: "var(--colour-pink)",
  color: "#fff",
  fontSize: "13px",
  padding: "10px 4px",
  /* position: "absolute",*/
  display:'flex',
  width: "100%",
  maxWidth: "calc(100% - 8px)",
  zIndex: "99",
};

const toastPClass = {
  padding: 0,
  margin: 0,
};

function Toast({ toast }) {
  return (
    <div style={toastClass}>
      <p style={toastPClass}>{toast.name}</p>
      {toast.button ? (
        <a className="button" href={toast.button.link}>
          {toast.button.text}
        </a>
      ) : (
        ""
      )}
    </div>
  );
}

export default function Toasts() {
  return (
    <>
      {ToastsData.map((toast) => (
        <Toast toast={toast} key={toast.id}/>
      ))}
    </>
  );
}
