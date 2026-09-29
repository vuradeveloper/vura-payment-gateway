import vuraLogo from "@/assets/vuraLogo.png";

export function VuraLogo({ size = 32 }: { size?: number }) {
  return (
    <img src={vuraLogo} alt="Vura" style={{ height: size, width: "auto" }} className="shrink-0" />
  );
}
