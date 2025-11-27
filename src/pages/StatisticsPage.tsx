// src/pages/StatisticsPage.tsx
import React, { useEffect, useState } from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { format, subDays } from 'date-fns';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend);

const StatisticsPage: React.FC = () => {
  const [counts, setCounts] = useState({ reservations: 0, people: 0, revenue: 0, occupancy: 0 });

  useEffect(() => {
    const targets = { reservations: 2847, people: 7682, revenue: 284750, occupancy: 84 };
    const duration = 2200;
    const steps = 60;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      if (step >= steps) {
        setCounts(targets);
        clearInterval(timer);
        return;
      }
      setCounts({
        reservations: Math.round(targets.reservations * (step / steps)),
        people: Math.round(targets.people * (step / steps)),
        revenue: Math.round(targets.revenue * (step / steps)),
        occupancy: Math.round(targets.occupancy * (step / steps)),
      });
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const lineData = {
    labels: Array.from({ length: 30 }, (_, i) => format(subDays(new Date(), 29 - i), 'MMM d')),
    datasets: [
      {
        label: 'Reservations',
        data: [68,92,105,88,120,135,112,98,145,160,142,158,170,165,180,195,188,210,225,198,215,240,235,248,260,275,268,282,290,284],
        borderColor: '#f97316',
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        borderWidth: 3,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const tableData = {
    labels: ['2-Seater', '4-Seater', '6-Seater', 'VIP Booth', 'Terrace'],
    datasets: [{ data: [320,580,410,120,210], backgroundColor: ['#f97316','#fb923c','#fdba74','#fed7aa','#ffedd5'] }],
  };

  const menuData = {
    labels: ['Signature Steak','Lobster Risotto','Truffle Pasta','Tiramisu','Champagne','Cocktails','Wagyu'],
    datasets: [{ label: 'Orders', data: [485,412,368,355,340,298,280], backgroundColor: '#f97316', borderRadius: 8 }],
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      {/* Header */}
      <motion.div initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-8">
        <h1 className="text-4xl font-bold">Main Dashboard</h1>
        <p className="text-muted-foreground mt-2">Restaurant Statistics • November 2025</p>
      </motion.div>

      {/* Top Small Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {[
          { icon: "📊", label: "Total Reservations", value: "2,847" },
          { icon: "💰", label: "Revenue", value: "$284.7K" },
          { icon: "📈", label: "Growth", value: "+32%" },
          { icon: "👥", label: "People Booked", value: "7,682" },
          { icon: "🪑", label: "Tables Used", value: "1,640" },
          { icon: "⭐", label: "Avg Rating", value: "4.9" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-5 text-center hover:border-primary/50 transition-all duration-300"
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <p className="text-xs text-muted-foreground">{item.label}</p>
            <p className="text-xl font-bold text-primary">{item.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {[
            { label: "Total Reservations", value: counts.reservations, change: "+24%" },
            { label: "People Booked", value: counts.people, change: "+19%" },
            { label: "Revenue This Month", value: `$${counts.revenue.toLocaleString()}`, change: "+32%", highlight: true },
            { label: "Occupancy Rate", value: `${counts.occupancy}%`, change: "Peak" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.15 }}
              className={`bg-card/80 backdrop-blur-xl border ${stat.highlight ? 'border-primary' : 'border-border'} rounded-3xl p-8 hover:border-primary transition-all duration-300`}
            >
              <p className="text-muted-foreground text-sm">{stat.label}</p>
              <p className={`text-5xl font-bold mt-3 ${stat.highlight ? 'text-primary' : 'text-foreground'}`}>
                {stat.value}
              </p>
              <p className="text-green-400 text-sm mt-4">↑ {stat.change}</p>
            </motion.div>
          ))}

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="bg-card/80 backdrop-blur-xl border border-border rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6 text-primary">Table Types Distribution</h3>
            <Doughnut data={tableData} options={{ cutout: '70%', plugins: { legend: { labels: { color: 'rgb(156 163 175)' } } } }} />
          </motion.div>
        </div>

        {/* Center Line Chart */}
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
          className="bg-card/80 backdrop-blur-xl border border-border rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-primary">Reservations This Month</h3>
          <Line data={lineData} options={{
            plugins: { legend: { display: false } },
            scales: { x: { grid: { color: 'rgba(156,163,175,0.1)' } }, y: { grid: { color: 'rgba(156,163,175,0.1)' } } },
          }} />
        </motion.div>

        {/* Right Column */}
        <div className="space-y-6">
          <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }}
            className="bg-card/80 backdrop-blur-xl border border-border rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6 text-primary">Top Menu Items</h3>
            <Bar data={menuData} options={{ indexAxis: 'y' as const, plugins: { legend: { display: false } } }} />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="bg-card/80 backdrop-blur-xl border border-border rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6 text-primary">Recent Bookings</h3>
            <div className="space-y-4 text-sm">
              {[
                { name: "Ahmed Al-Mansour", table: "VIP Booth", time: "8:30 PM", status: "Confirmed" },
                { name: "Sara Khalid", table: "Terrace 4-Seater", time: "7:00 PM", status: "Confirmed" },
                { name: "Omar Rahman", table: "6-Seater", time: "9:15 PM", status: "Pending" },
                { name: "Layla Hassan", table: "2-Seater", time: "6:45 PM", status: "Confirmed" },
                { name: "Mohammed Ali", table: "VIP Booth", time: "10:00 PM", status: "Confirmed" },
                { name: "Fatima Zahra", table: "4-Seater", time: "8:00 PM", status: "Pending" },
              ].map((b, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                  <div>
                    <p className="font-medium text-foreground">{b.name}</p>
                    <p className="text-muted-foreground text-xs">{b.table}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-medium">{b.time}</p>
                    <p className={`text-xs ${b.status === 'Confirmed' ? 'text-green-400' : 'text-yellow-400'}`}>{b.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
