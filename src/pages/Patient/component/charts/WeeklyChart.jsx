import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function WeeklyChart({ data }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "16px",
        boxShadow: "0 1px 3px #ddd",

        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        marginBottom: "24px",
      }}
    >
      <h3 style={{ textAlign: "right", marginBottom: "10px" }}>
        اتجاه الأسبوع الحالي
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
        

          <Line
            type="monotone"
            dataKey="systolic"
            stroke="#ff4b4b"
            name="ضغط الدم"
          />
          <Line type="monotone" dataKey="sugar" stroke="#0088FE" name="السكر" />
          <Line
            type="monotone"
            dataKey="heartRate"
            stroke="#FF69B4"
            name="النبض"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
