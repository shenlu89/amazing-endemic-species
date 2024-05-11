import NumberAnimation from "@/components/number-animation";

export default function MetricItem({ isLoading, count, label }: any) {
  return (
    <div className="flex space-x-1">
      {isLoading ? (
        <div className="text-red-600">0</div>
      ) : (
        <NumberAnimation count={count} className="text-red-600" />
      )}
      <div className="">{label}</div>
    </div>
  );
}
