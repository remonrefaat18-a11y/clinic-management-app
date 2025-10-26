import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function MonthlyChart({ data }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "16px",
        boxShadow: "0 1px 3px #ddd",
        width: "40rem",
      }}
    >
      <h3 style={{ textAlign: "right", marginBottom: "10px" }}>
        المتوسط الشهري
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Bar dataKey="systolic" fill="#ff4b4b" name="ضغط الدم" />
          <Bar dataKey="sugar" fill="#0088FE" name="السكر" />
          <Bar dataKey="heartRate" fill="#FF69B4" name="النبض" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
