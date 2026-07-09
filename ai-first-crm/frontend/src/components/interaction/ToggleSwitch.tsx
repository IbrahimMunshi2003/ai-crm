interface Props {
  checked: boolean;
}

export default function ToggleSwitch({
  checked,
}: Props) {
  return (
    <div
      className={`relative h-6 w-11 rounded-full transition ${
        checked
          ? "bg-green-500"
          : "bg-gray-300"
      }`}
    >
      <div
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${
          checked
            ? "translate-x-5"
            : "translate-x-0.5"
        }`}
      />
    </div>
  );
}