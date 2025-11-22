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
        backgroundColor: 'rgba(249, 115, 22, 0.15)',
        borderWidth: 4,
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#f97316',
        pointRadius: 5,
        pointHoverRadius: 9,
      },
    ],
  };

  const tableData = {
    labels: ['2-Seater', '4-Seater', '6-Seater', 'VIP Booth', 'Terrace'],
    datasets: [{
      data: [320, 580, 410, 120, 210],
      backgroundColor: ['#f97316', '#fb923c', '#fdba74', '#fed7aa', '#ffedd5'],
      borderWidth: 6,
      borderColor: '#0f172a',
      hoverOffset: 20,
    }],
  };

  const menuData = {
    labels: ['Signature Steak','Lobster Risotto','Truffle Pasta','Tiramisu','Champagne','Cocktails','Wagyu'],
    datasets: [{
      label: 'Orders',
      data: [485,412,368,355,340,298,280],
      backgroundColor: '#f97316',
      borderRadius: 12,
      barThickness: 22,
    }],
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
          Main Dashboard
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">Restaurant Statistics • November 2025</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-10">
        {[
          { icon: "📊", label: "Total Reservations", value: "2,847" },
          { icon: "💰", label: "Revenue", Commitment: "$284.7K" },
          { icon: "📈", label: "Growth", value: "+32%" },
          { icon: "👥", label: "People Booked", value: "7,682" },
          { icon: "🪑", label: "Tables Used", value: "1,640" },
          { icon: "⭐", label: "Avg Rating", value: "4.9" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="bg-card/90 backdrop-blur-xl border border-border rounded-3xl p-6 text-center shadow-lg hover:shadow-orange-500/20 transition-all"
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <p className="text-xs text-muted-foreground">{item.label}</p>
            <p className="text-2xl font-bold text-primary mt-1">{item.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-8">
          {[
            { label: "Total Reservations", value: counts.reservations.toLocaleString(), change: "+24%" },
            { label: "People Booked", value: counts.people.toLocaleString(), change: "+19%" },
            { label: "Revenue This Month", value: `$${counts.revenue.toLocaleString()}`, change: "+32%", highlight: true },
            { label: "Occupancy Rate", value: `${counts.occupancy}%`, change: "Peak" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.15, type: "spring" }}
              whileHover={{ scale: 1.02 }}
              className={`relative bg-card/90 backdrop-blur-xl border ${stat.highlight ? 'border-orange-500 shadow-orange-500/20' : 'border-border'} rounded-3xl p-8 shadow-2xl overflow-hidden`}
            >
              {stat.highlight && (
                <motion.div
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"
                />
              )}
              <p className="text-muted-foreground text-sm">{stat.label}</p>
              <motion.p
                key={stat.value}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className={`text-5xl font-extrabold mt-3 ${stat.highlight ? 'text-orange-500' : ''}`}
              >
                {stat.value}
              </motion.p>
              <p className="text-green-400 text-sm mt-4 flex items-center gap-1">
                <span>↑</span> {stat.change}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative bg-card/90 backdrop-blur-xl border border-border rounded-3xl p-12 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none" />

            <motion.h3
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-2xl font-bold mb-8 text-center text-primary"
            >
              Table Types Distribution
            </motion.h3>

            <div className="relative mx-auto w-full max-w-lg">
              <motion.div
                initial={{ scale: 0.8, rotate: -360 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.8, ease: "easeOut", delay: 1.1 }}
                className="relative"
              >
                <Doughnut
                  data={tableData}
                  options={{
                    cutout: '60%',
                    plugins: {
                      legend: {
                        position: 'bottom' as const,
                        labels: {
                          padding: 30,
                          color: '#cbd5e1',
                          font: { size: 14, weight: '600' },
                          usePointStyle: true,
                          pointStyle: 'rectRounded',
                        },
                      },
                      
                    },
                    animation: { duration: 3000, easing: 'easeOutQuart' },
                  }}
                />

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.2, type: "spring", stiffness: 150, damping: 15 }}
                    className="text-center"
                  >
                    <div className="text-7xl md:text-8xl font-extrabold text-orange-500 tracking-tight drop-shadow-2xl" >
                      1,640
                    </div>
                    <div className="text-lg md:text-xl font-semibold text-gray-400 mt-2 tracking-wider">
                      Tables Used
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 -z-10 rounded-full border-4 border-orange-500/20 blur-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-card/90 backdrop-blur-xl border border-border rounded-3xl p-8 shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-primary">Reservations This Month</h3>
          <Line data={lineData} options={{
            plugins: { legend: { display: false } },
            scales: { x: { grid: { color: 'rgba(156,163,175,0.08)' } }, y: { grid: { color: 'rgba(156,163,175,0.08)' } } },
            animation: { duration: 2800 },
          }} />
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-card/90 backdrop-blur-xl border border-border rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Top Menu Items</h3>
            <Bar data={menuData} options={{
              indexAxis: 'y' as const,
              plugins: { legend: { display: false } },
              animation: { duration: 2000 },
            }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="bg-card/90 backdrop-blur-xl border border-border rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Recent Bookings</h3>
            <div className="space-y-5">
              {[
                { name: "Ahmed Al-Mansour", table: "VIP Booth", time: "8:30 PM", status: "Confirmed" },
                { name: "Sara Khalid", table: "Terrace 4-Seater", time: "7:00 PM", status: "Confirmed" },
                { name: "Omar Rahman", table: "6-Seater", time: "9:15 PM", status: "Pending" },
                { name: "Layla Hassan", table: "2-Seater", time: "6:45 PM", status: "Confirmed" },
                { name: "Mohammed Ali", table: "VIP Booth", time: "10:00 PM", status: "Confirmed" },
                { name: "Fatima Zahra", table: "4-Seater", time: "8:00 PM", status: "Pending" },
              ].map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.1 + i * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex justify-between items-center py-4 border-b border-border/30 last:border-0 group"
                >
                  <div>
                    <p className="font-semibold group-hover:text-orange-500 transition-colors">{b.name}</p>
                    <p className="text-muted-foreground text-sm">{b.table}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-bold">{b.time}</p>
                    <p className={`text-sm ${b.status === 'Confirmed' ? 'text-green-400' : 'text-yellow-400'}`}>
                      • {b.status}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;