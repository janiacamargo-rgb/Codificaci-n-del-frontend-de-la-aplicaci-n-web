import { useState } from 'react'

// ─── Seed Data ────────────────────────────────────────────────────────────────

const USERS = [
  { username: 'admin', password: 'Camila123', name: 'Yaraseth', role: 'owner' },
  { username: 'empleado', password: 'empleado123', name: 'Empleado', role: 'employee' },
]

const initProducts = [
  { id: 1, name: 'Tortilla de maíz', unit: 'kg', stock: 150, minStock: 30, price: 27 },
  { id: 2, name: 'Coca-Cola 600 ml', unit: 'pza', stock: 96, minStock: 24, price: 20 },
  { id: 3, name: 'Pepsi 600 ml', unit: 'pza', stock: 72, minStock: 24, price: 18 },
  { id: 4, name: 'Arroz (1 kg)', unit: 'kg', stock: 60, minStock: 10, price: 28 },
  { id: 5, name: 'Frijol negro (1 kg)', unit: 'kg', stock: 50, minStock: 10, price: 32 },
  { id: 6, name: 'Aceite vegetal 1 L', unit: 'pza', stock: 30, minStock: 6, price: 45 },
  { id: 7, name: 'Azúcar (1 kg)', unit: 'kg', stock: 40, minStock: 8, price: 22 },
  { id: 8, name: 'Sal (1 kg)', unit: 'kg', stock: 35, minStock: 5, price: 10 },
  { id: 9, name: 'Harina de maíz (1 kg)', unit: 'kg', stock: 80, minStock: 20, price: 18 },
  { id: 10, name: 'Jabón de barra', unit: 'pza', stock: 48, minStock: 12, price: 15 },
  { id: 11, name: 'Leche (1 L)', unit: 'pza', stock: 60, minStock: 15, price: 25 },
  { id: 12, name: 'Mantequilla (250 g)', unit: 'pza', stock: 30, minStock: 10, price: 35 },
  { id: 13, name: 'Queso (250 g)', unit: 'pza', stock: 20, minStock: 5, price: 40 },
  { id: 14, name: 'Pan de molde (1 kg)', unit: 'kg', stock: 40, minStock: 10, price: 25 },
  { id: 15, name: 'Huevos (12 unidades)', unit: 'pza', stock: 36, minStock: 12, price: 30 },
  { id: 16, name: 'Agua (1 L)', unit: 'pza', stock: 48, minStock: 12, price: 12 },
  { id: 17, name: 'Cereal (500 g)', unit: 'pza', stock: 24, minStock: 6, price: 28 },
  { id: 18, name: 'Café (250 g)', unit: 'pza', stock: 30, minStock: 10, price: 35 },
  { id: 19, name: 'Té (20 bolsitas)', unit: 'pza', stock: 40, minStock: 10, price: 20 },
  { id: 20, name: 'Galletas (200 g)', unit: 'pza', stock: 50, minStock: 10, price: 22 },
  { id: 21, name: 'Refresco de cola (2 L)', unit: 'pza', stock: 30, minStock: 6, price: 42 },
  { id: 22, name: 'Refresco de cola (3 L)', unit: 'pza', stock: 30, minStock: 6, price: 65 },
  { id: 23, name: 'Refresco de cola (1 L)', unit: 'pza', stock: 30, minStock: 6, price: 26 },
  { id: 24, name: 'Refresco de cola (1.5 L)', unit: 'pza', stock: 30, minStock: 6, price: 38 },
  { id: 25, name: 'Refresco de cola (2.5 L)', unit: 'pza', stock: 30, minStock: 6, price: 34 },
  { id: 26, name: 'Refresco de cola (1.5 Retornable L)', unit: 'pza', stock: 30, minStock: 6, price: 25 },
  { id: 27, name: 'Refresco de cola (2 Retornable L)', unit: 'pza', stock: 30, minStock: 6, price: 32 },
  { id: 28, name: 'Pan dulce (1 kg)', unit: 'pza', stock: 20, minStock: 5, price: 22 },
  { id: 29, name: 'Pan dulce (500 g)', unit: 'pza', stock: 30, minStock: 10, price: 20 },
  { id: 30, name: 'Té helado (1 L)', unit: 'pza', stock: 30, minStock: 6, price: 28 },
  { id: 31, name: 'Salsa (1 L)', unit: 'pza', stock: 7, minStock: 4, price: 130 },
  { id: 32, name: 'Salsa (500 ml)', unit: 'pza', stock: 10, minStock: 5, price: 70 },
  { id: 33, name: 'Tortillas de Harina (1 kg)', unit: 'pza', stock: 15, minStock: 5, price: 35 },
  { id: 34, name: 'Tortillas de Harina (500 g)', unit: 'pza', stock: 20, minStock: 5, price: 20 },
   { id: 34, name: 'Jabón Foca (1 kg)', unit: 'pza', stock: 30, minStock: 5, price: 15 },
  { id: 35, name: 'Azúcar morena (1 kg)', unit: 'pza', stock: 17, minStock: 5, price: 35 }
  
]

const initCustomers = [
  { id: 1, name: 'La Palma', phone: '555-1234', creditLimit: 2000, balance: 0 },
  { id: 2, name: 'El Mayo', phone: '555-5678', creditLimit: 1500, balance: 0 },
  { id: 3, name: 'San Luciano', phone: '555-9012', creditLimit: 3000, balance: 0 },
  { id: 4, name: 'La Morenita', phone: '555-3456', creditLimit: 1000, balance: 0 },
  { id: 5, name: 'Ramonsillo', phone: '555-7890', creditLimit: 2500, balance: 0 },
  { id: 6, name: 'El poblano', phone: '555-2345', creditLimit: 1800, balance: 0 },
]

const initMovements = [
  { id: 1, productId: 1, type: 'entrada', qty: 50, date: '2026-09-15', note: 'Producción matutina' },
  { id: 2, productId: 2, type: 'salida', qty: 12, date: '2026-09-16', note: 'Venta' },
  { id: 3, productId: 4, type: 'entrada', qty: 20, date: '2026-09-17', note: 'Compra a proveedor' },
]

const initTransactions = [
  { id: 1, customerId: 1, type: 'cargo', amount: 450, date: '2026-09-10', note: 'Pedido semanal' },
  { id: 2, customerId: 2, type: 'cargo', amount: 240, date: '2026-09-12', note: 'Pedido bisemanal' },
  { id: 3, customerId: 2, type: 'abono', amount: 120, date: '2026-09-15', note: 'Pago parcial' },
  { id: 4, customerId: 4, type: 'cargo', amount: 890, date: '2026-09-14', note: 'Pedido mensual' },
  { id: 5, customerId: 3, type: 'cargo', amount: 300, date: '2026-09-16', note: 'Pedido especial' },
  { id: 6, customerId: 1, type: 'abono', amount: 200, date: '2026-09-18', note: 'Pago parcial' },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

function today() {
  return new Date().toISOString().split('T')[0]
}

function fmt(n) {
  return n.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })
}

// ─── Componentes ───────────────────────────────────────────────────────────────

function Badge({ children, color }) {
  return (
    <span className={`inline-block text-xs font-mono px-2 py-0.5 rounded-full font-medium ${color}`}>
      {children}
    </span>
  )
}

function Card({ children, className = '' }) {
  return (
    <div className={`bg-white border border-[#E8D9C0] rounded-2xl shadow-sm ${className}`}>
      {children}
    </div>
  )
}

function Btn({
  children, onClick, variant = 'primary', className = '', type = 'button', disabled = false
}) {
  const base = 'inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-150 cursor-pointer disabled:opacity-40'
  const variants = {
    primary: 'bg-[#C46B2D] text-white hover:bg-[#A85720] active:scale-95',
    secondary: 'bg-[#F5C842] text-[#3D2B1F] hover:bg-[#E0B530] active:scale-95',
    ghost: 'bg-transparent text-[#6B4226] border border-[#C46B2D40] hover:bg-[#F0D5B040]',
    danger: 'bg-[#C0392B] text-white hover:bg-[#A93226] active:scale-95',
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  )
}

function Input({ label, ...props }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs font-medium text-[#6B4226] uppercase tracking-wide">{label}</span>
      <input
        {...props}
        className="border border-[#E8D9C0] rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#C46B2D40] focus:border-[#C46B2D] transition-all"
      />
    </label>
  )
}

function Select({ label, children, ...props }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs font-medium text-[#6B4226] uppercase tracking-wide">{label}</span>
      <select
        {...props}
        className="border border-[#E8D9C0] rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#C46B2D40] focus:border-[#C46B2D] transition-all"
      >
        {children}
      </select>
    </label>
  )
}

// ─── Login Page ───────────────────────────────────────────────────────────────

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const found = USERS.find(u => u.username === username && u.password === password)
    if (found) {
      onLogin({ name: found.name, role: found.role })
    } else {
      setError('Usuario o contraseña incorrectos.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #3D2B1F 0%, #6B4226 50%, #C46B2D 100%)' }}>
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, #F5C842 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="relative w-full max-w-sm mx-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F5C842] mb-4 shadow-lg">
            <span className="text-4xl">🌽</span>
          </div>
          <h1 className="text-4xl font-bold text-white" style={{ fontFamily: 'Fraunces, serif' }}>
            Tortillería
          </h1>
          <p className="text-[#F5C842] text-sm mt-1 italic" style={{ fontFamily: 'Fraunces, serif' }}>
            "Tortillería la 100"
          </p>
        </div>

        <Card className="p-8">
          <h2 className="text-xl font-semibold text-[#3D2B1F] mb-6" style={{ fontFamily: 'Fraunces, serif' }}>
            Iniciar sesión
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="Usuario"
              type="text"
              placeholder="ej. admin"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
            <Input
              label="Contraseña"
              type="password"
              placeholder="••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            {error && (
              <p className="text-xs text-[#C0392B] bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>
            )}
            <Btn type="submit" className="w-full justify-center mt-2">
              Entrar
            </Btn>
          </form>
          
        
        </Card>
      </div>
    </div>
  )
}

// ─── Role Page ────────────────────────────────────────────────────────────────

function RolePage({ user, onContinue, onLogout }) {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#FAF3E0' }}>
      <div className="w-full max-w-md mx-4 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F5C842] mb-6">
          <span className="text-3xl">🌽</span>
        </div>
        <h1 className="text-3xl font-bold text-[#3D2B1F] mb-2" style={{ fontFamily: 'Fraunces, serif' }}>
          ¡Bienvenido, {user.name}!
        </h1>

        <Card className="p-8 mb-6">

          <Btn onClick={onContinue} className="w-full justify-center">
            Ir al panel principal →
          </Btn>
        </Card>

        <button onClick={onLogout} className="text-sm text-[#8C7B6E] hover:text-[#C46B2D] transition-colors cursor-pointer">
          ← Cerrar sesión
        </button>
      </div>
    </div>
  )
}

// ─── Top Navigation ───────────────────────────────────────────────────────────

function Topbar({ user, currentPage, onNavigate, onLogout }) {
  const navItems = [
    { label: 'Inicio', page: 'dashboard', icon: '⊞' },
    { label: 'Inventario', page: 'inventory', icon: '📦' },
    { label: 'Créditos', page: 'credits', icon: '💳' },
    { label: 'Precios', page: 'prices', icon: '🏷️', ownerOnly: true },
  ]

  return (
    <header className="bg-[#3D2B1F] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        <button onClick={() => onNavigate('dashboard')} className="flex items-center gap-2 cursor-pointer">
          <span className="text-xl">🌽</span>
          <span className="font-bold text-[#F5C842]" style={{ fontFamily: 'Fraunces, serif' }}>Tortillería la 100</span>
        </button>

        <nav className="hidden sm:flex items-center gap-1">
          {navItems
            .filter(i => !i.ownerOnly || user.role === 'owner')
            .map(i => (
              <button
                key={i.page}
                onClick={() => onNavigate(i.page)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all cursor-pointer ${currentPage === i.page ? 'bg-[#C46B2D] text-white' : 'text-[#E8D9C0] hover:bg-[#6B4226]'}`}
              >
                <span>{i.icon}</span> {i.label}
              </button>
            ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs text-[#F5C842] font-medium">{user.name}</p>
            <p className="text-xs text-[#8C7B6E]">{user.role === 'owner' ? 'Dueño' : 'Empleado'}</p>
          </div>
          <button onClick={onLogout} className="text-xs text-[#8C7B6E] hover:text-[#F5C842] transition-colors cursor-pointer border border-[#6B4226] rounded-lg px-2 py-1">
            Salir
          </button>
        </div>
      </div>
      <div className="sm:hidden flex border-t border-[#6B4226]">
        {navItems
          .filter(i => !i.ownerOnly || user.role === 'owner')
          .map(i => (
            <button
              key={i.page}
              onClick={() => onNavigate(i.page)}
              className={`flex-1 py-2 text-xs flex flex-col items-center gap-0.5 transition-all cursor-pointer ${currentPage === i.page ? 'text-[#F5C842] bg-[#6B4226]' : 'text-[#E8D9C0]'}`}
            >
              <span>{i.icon}</span>{i.label}
            </button>
          ))}
      </div>
    </header>
  )
}

// ─── Dashboard Page ───────────────────────────────────────────────────────────

function DashboardPage({ user, products, customers, onNavigate }) {
  const totalDebt = customers.reduce((acc, c) => acc + c.balance, 0)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#3D2B1F]" style={{ fontFamily: 'Fraunces, serif' }}>
          Panel principal
        </h1>
        <p className="text-[#8C7B6E] text-sm mt-1">{new Date().toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <Card className="p-5">
          <p className="text-xs text-[#8C7B6E] uppercase tracking-wide font-medium mb-1">Productos</p>
          <p className="text-3xl font-bold text-[#3D2B1F]" style={{ fontFamily: 'Fraunces, serif' }}>{products.length}</p>
          <p className="text-xs text-[#8C7B6E] mt-1">en catálogo</p>
        </Card>
        <Card className="p-5">
          <p className="text-xs text-[#8C7B6E] uppercase tracking-wide font-medium mb-1">Clientes</p>
          <p className="text-3xl font-bold text-[#3D2B1F]" style={{ fontFamily: 'Fraunces, serif' }}>{customers.length}</p>
          <p className="text-xs text-[#4A7C59] mt-1">{customers.filter(c => c.balance === 0).length} al corriente</p>
        </Card>
        <Card className="p-5">
          <p className="text-xs text-[#8C7B6E] uppercase tracking-wide font-medium mb-1">Crédito total</p>
          <p className="text-2xl font-bold text-[#C46B2D]" style={{ fontFamily: 'Fraunces, serif' }}>{fmt(totalDebt)}</p>
          <p className="text-xs text-[#8C7B6E] mt-1">en cuentas por cobrar</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <button onClick={() => onNavigate('inventory')} className="group cursor-pointer">
          <Card className="p-6 hover:border-[#C46B2D] hover:shadow-md transition-all group-hover:bg-[#FDF8F0]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F0D5B0] flex items-center justify-center text-2xl flex-shrink-0">📦</div>
              <div className="text-left">
                <h3 className="font-semibold text-[#3D2B1F] mb-1" style={{ fontFamily: 'Fraunces, serif' }}>Inventario</h3>
                <p className="text-xs text-[#8C7B6E]">Entradas, salidas y existencias de productos</p>
              </div>
            </div>
          </Card>
        </button>

        <button onClick={() => onNavigate('credits')} className="group cursor-pointer">
          <Card className="p-6 hover:border-[#4A7C59] hover:shadow-md transition-all group-hover:bg-[#F0FAF2]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#D4EAD7] flex items-center justify-center text-2xl flex-shrink-0">💳</div>
              <div className="text-left">
                <h3 className="font-semibold text-[#3D2B1F] mb-1" style={{ fontFamily: 'Fraunces, serif' }}>Crédito de clientes</h3>
                <p className="text-xs text-[#8C7B6E]">Cargos, abonos y saldos por cliente</p>
              </div>
            </div>
          </Card>
        </button>

        {user.role === 'owner' && (
          <button onClick={() => onNavigate('prices')} className="group cursor-pointer">
            <Card className="p-6 hover:border-[#F5C842] hover:shadow-md transition-all group-hover:bg-[#FDFAE8]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FDF3C0] flex items-center justify-center text-2xl flex-shrink-0">🏷️</div>
                <div className="text-left">
                  <h3 className="font-semibold text-[#3D2B1F] mb-1" style={{ fontFamily: 'Fraunces, serif' }}>Precios</h3>
                  <p className="text-xs text-[#8C7B6E]">Actualizar precios de venta al público</p>
                </div>
              </div>
            </Card>
          </button>
        )}
      </div>
    </div>
  )
}

// ─── Inventory Page ───────────────────────────────────────────────────────────

function InventoryPage({ products, setProducts, movements, setMovements }) {
  const [tab, setTab] = useState('stock')
  const [form, setForm] = useState({ productId: 1, type: 'entrada', qty: '', note: '' })
  const [msg, setMsg] = useState('')

  function submitMovement(e) {
    e.preventDefault()
    const qty = parseFloat(form.qty)
    if (!qty || qty <= 0) return
    const prod = products.find(p => p.id === form.productId)
    if (!prod) return
    if (form.type === 'salida' && qty > prod.stock) {
      setMsg('❌ No hay suficiente stock para esta salida.')
      return
    }
    const newMovement = {
      id: movements.length + 1,
      productId: form.productId,
      type: form.type,
      qty,
      date: today(),
      note: form.note,
    }
    setMovements([newMovement, ...movements])
    setProducts(products.map(p =>
      p.id === form.productId
        ? { ...p, stock: form.type === 'entrada' ? p.stock + qty : p.stock - qty }
        : p
    ))
    setForm({ productId: products[0].id, type: 'entrada', qty: '', note: '' })
    setMsg('✅ Movimiento registrado correctamente.')
    setTimeout(() => setMsg(''), 3000)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#3D2B1F]" style={{ fontFamily: 'Fraunces, serif' }}>Inventario</h1>
          <p className="text-[#8C7B6E] text-sm mt-1">Existencias y movimientos de productos</p>
        </div>
        <div className="flex gap-2">
          <Btn variant={tab === 'stock' ? 'primary' : 'ghost'} onClick={() => setTab('stock')}>Existencias</Btn>
          <Btn variant={tab === 'move' ? 'primary' : 'ghost'} onClick={() => setTab('move')}>Registrar movimiento</Btn>
        </div>
      </div>

      {tab === 'stock' && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {products.map(p => {
              const pct = Math.min((p.stock / (p.minStock * 3)) * 100, 100)
              const low = p.stock <= p.minStock
              return (
                <Card key={p.id} className={`p-5 ${low ? 'border-[#F5C842]' : ''}`}>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-semibold text-[#3D2B1F]" style={{ fontFamily: 'Fraunces, serif' }}>{p.name}</p>
                      <p className="text-xs text-[#8C7B6E]">Precio: {fmt(p.price)} / {p.unit}</p>
                    </div>
                    {low && <Badge color="bg-[#FDF3C0] text-[#6B4226]">Stock bajo</Badge>}
                  </div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-3xl font-bold text-[#3D2B1F]" style={{ fontFamily: 'Fraunces, serif' }}>{p.stock}</span>
                    <span className="text-sm text-[#8C7B6E] mb-1">{p.unit} / mín. {p.minStock}</span>
                  </div>
                  <div className="w-full bg-[#E8D9C0] rounded-full h-2">
                    <div className={`h-2 rounded-full transition-all ${low ? 'bg-[#F5C842]' : 'bg-[#4A7C59]'}`} style={{ width: `${pct}%` }} />
                  </div>
                </Card>
              )
            })}
          </div>

          <Card className="p-6">
            <h2 className="font-semibold text-[#3D2B1F] mb-4" style={{ fontFamily: 'Fraunces, serif' }}>Últimos movimientos</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#E8D9C0]">
                    {['Fecha', 'Producto', 'Tipo', 'Cantidad', 'Nota'].map(h => (
                      <th key={h} className="text-left text-xs text-[#8C7B6E] uppercase tracking-wide py-2 pr-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {movements.map(m => {
                    const prod = products.find(p => p.id === m.productId)
                    return (
                      <tr key={m.id} className="border-b border-[#E8D9C0] last:border-0 hover:bg-[#FAF3E0]">
                        <td className="py-2.5 pr-4 font-mono text-xs text-[#8C7B6E]">{m.date}</td>
                        <td className="py-2.5 pr-4 text-[#3D2B1F]">{prod?.name}</td>
                        <td className="py-2.5 pr-4">
                          <Badge color={m.type === 'entrada' ? 'bg-[#D4EAD7] text-[#4A7C59]' : 'bg-[#FDF3C0] text-[#6B4226]'}>
                            {m.type === 'entrada' ? '↑ Entrada' : '↓ Salida'}
                          </Badge>
                        </td>
                        <td className="py-2.5 pr-4 font-mono text-[#3D2B1F]">{m.qty} {prod?.unit}</td>
                        <td className="py-2.5 text-[#8C7B6E]">{m.note}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        </>
      )}

      {tab === 'move' && (
        <div className="max-w-lg">
          <Card className="p-8">
            <h2 className="font-semibold text-[#3D2B1F] mb-6" style={{ fontFamily: 'Fraunces, serif' }}>Registrar movimiento</h2>
            <form onSubmit={submitMovement} className="flex flex-col gap-4">
              <Select
                label="Producto"
                value={form.productId}
                onChange={e => setForm({ ...form, productId: parseInt(e.target.value) })}
              >
                {products.map(p => <option key={p.id} value={p.id}>{p.name} (stock: {p.stock} {p.unit})</option>)}
              </Select>

              <div className="grid grid-cols-2 gap-3">
                {['entrada', 'salida'].map(t => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setForm({ ...form, type: t })}
                    className={`p-3 rounded-xl border-2 text-sm font-medium transition-all cursor-pointer ${form.type === t
                      ? t === 'entrada' ? 'border-[#4A7C59] bg-[#D4EAD7] text-[#4A7C59]' : 'border-[#C46B2D] bg-[#F0D5B0] text-[#C46B2D]'
                      : 'border-[#E8D9C0] text-[#8C7B6E]'}`}
                  >
                    {t === 'entrada' ? '↑ Entrada' : '↓ Salida'}
                  </button>
                ))}
              </div>

              <Input
                label="Cantidad"
                type="number"
                min="0.1"
                step="0.1"
                placeholder="0"
                value={form.qty}
                onChange={e => setForm({ ...form, qty: e.target.value })}
                required
              />

              <Input
                label="Nota (opcional)"
                type="text"
                placeholder="ej. Producción matutina"
                value={form.note}
                onChange={e => setForm({ ...form, note: e.target.value })}
              />

              {msg && (
                <p className={`text-sm rounded-lg px-3 py-2 ${msg.startsWith('✅') ? 'bg-[#D4EAD7] text-[#4A7C59]' : 'bg-red-50 text-[#C0392B]'}`}>{msg}</p>
              )}

              <Btn type="submit" className="w-full justify-center">
                Registrar movimiento
              </Btn>
            </form>
          </Card>
        </div>
      )}
    </div>
  )
}

// ─── Credits Page ─────────────────────────────────────────────────────────────

function CreditsPage({ customers, setCustomers, transactions, setTransactions }) {
  const [selected, setSelected] = useState(null)
  const [tab, setTab] = useState('list')
  const [txForm, setTxForm] = useState({ type: 'cargo', amount: '', note: '' })
  const [newCust, setNewCust] = useState({ name: '', phone: '', creditLimit: '' })
  const [msg, setMsg] = useState('')

  const custTransactions = selected ? transactions.filter(t => t.customerId === selected.id) : []

  function submitTransaction(e) {
    e.preventDefault()
    if (!selected) return
    const amount = parseFloat(txForm.amount)
    if (!amount || amount <= 0) return
    const newTx = {
      id: transactions.length + 1,
      customerId: selected.id,
      type: txForm.type,
      amount,
      date: today(),
      note: txForm.note,
    }
    setTransactions([newTx, ...transactions])
    const newBalance = txForm.type === 'cargo'
      ? selected.balance + amount
      : Math.max(0, selected.balance - amount)
    const updatedCust = { ...selected, balance: newBalance }
    setCustomers(customers.map(c => c.id === selected.id ? updatedCust : c))
    setSelected(updatedCust)
    setTxForm({ type: 'cargo', amount: '', note: '' })
    setMsg('✅ Transacción registrada.')
    setTimeout(() => setMsg(''), 3000)
  }

  function submitNewCustomer(e) {
    e.preventDefault()
    const limit = parseFloat(newCust.creditLimit)
    if (!newCust.name || !limit) return
    const c = {
      id: customers.length + 100,
      name: newCust.name,
      phone: newCust.phone,
      creditLimit: limit,
      balance: 0,
    }
    setCustomers([...customers, c])
    setNewCust({ name: '', phone: '', creditLimit: '' })
    setMsg('✅ Cliente registrado.')
    setTab('list')
    setTimeout(() => setMsg(''), 3000)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#3D2B1F]" style={{ fontFamily: 'Fraunces, serif' }}>Crédito de clientes</h1>
          <p className="text-[#8C7B6E] text-sm mt-1">Gestión de cuentas por cobrar</p>
        </div>
        <Btn variant="secondary" onClick={() => { setTab('new-customer'); setSelected(null) }}>+ Nuevo cliente</Btn>
      </div>

      {msg && <p className="mb-4 text-sm bg-[#D4EAD7] text-[#4A7C59] rounded-xl px-4 py-2">{msg}</p>}

      {tab === 'new-customer' ? (
        <div className="max-w-lg">
          <Card className="p-8">
            <h2 className="font-semibold text-[#3D2B1F] mb-6" style={{ fontFamily: 'Fraunces, serif' }}>Registrar nuevo cliente</h2>
            <form onSubmit={submitNewCustomer} className="flex flex-col gap-4">
              <Input label="Nombre / Negocio" type="text" placeholder="ej. Taquería El Güero" value={newCust.name} onChange={e => setNewCust({ ...newCust, name: e.target.value })} required />
              <Input label="Teléfono" type="tel" placeholder="555-0000" value={newCust.phone} onChange={e => setNewCust({ ...newCust, phone: e.target.value })} />
              <Input label="Límite de crédito (MXN)" type="number" min="100" step="100" placeholder="1000" value={newCust.creditLimit} onChange={e => setNewCust({ ...newCust, creditLimit: e.target.value })} required />
              <div className="flex gap-3 mt-2">
                <Btn type="submit" className="flex-1 justify-center">Registrar</Btn>
                <Btn variant="ghost" onClick={() => setTab('list')}>Cancelar</Btn>
              </div>
            </form>
          </Card>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card className="overflow-hidden">
              <div className="p-4 border-b border-[#E8D9C0]">
                <p className="text-xs font-medium text-[#6B4226] uppercase tracking-wide">Clientes ({customers.length})</p>
              </div>
              <div className="divide-y divide-[#E8D9C0]">
                {customers.map(c => {
                  const isSelected = selected?.id === c.id
                  return (
                    <button
                      key={c.id}
                      onClick={() => { setSelected(c); setTab('list') }}
                      className={`w-full text-left p-4 hover:bg-[#FAF3E0] transition-colors cursor-pointer ${isSelected ? 'bg-[#FDF3C0]' : ''}`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <p className="font-semibold text-[#3D2B1F]" style={{ fontFamily: 'Fraunces, serif' }}>{c.name}</p>
                        <Badge color={c.balance > 0 ? 'bg-[#FDF3C0] text-[#6B4226]' : 'bg-[#D4EAD7] text-[#4A7C59]'}>
                          {c.balance > 0 ? 'Deuda' : 'Al corriente'}
                        </Badge>
                      </div>
                      <p className="text-xs text-[#8C7B6E] mb-2">{c.phone}</p>
                      <div className="flex justify-between text-xs">
                        <span className="text-[#8C7B6E]">Saldo: <strong className="text-[#3D2B1F]">{fmt(c.balance)}</strong></span>
                        <span className="text-[#8C7B6E]">Límite: {fmt(c.creditLimit)}</span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </Card>
          </div>

          <div className="lg:col-span-2">
            {selected ? (
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-bold text-[#3D2B1F]" style={{ fontFamily: 'Fraunces, serif' }}>{selected.name}</h2>
                      <p className="text-xs text-[#8C7B6E]">Teléfono: {selected.phone || 'N/A'}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-[#8C7B6E] uppercase">Saldo actual</p>
                      <p className="text-2xl font-bold text-[#C46B2D]" style={{ fontFamily: 'Fraunces, serif' }}>{fmt(selected.balance)}</p>
                    </div>
                  </div>

                  <form onSubmit={submitTransaction} className="flex flex-wrap items-end gap-3 pt-4 border-t border-[#E8D9C0]">
                    <div className="w-32">
                      <Select label="Tipo" value={txForm.type} onChange={e => setTxForm({ ...txForm, type: e.target.value })}>
                        <option value="cargo">+ Cargo</option>
                        <option value="abono">- Abono</option>
                      </Select>
                    </div>
                    <div className="w-32">
                      <Input label="Monto ($)" type="number" step="0.5" placeholder="0" value={txForm.amount} onChange={e => setTxForm({ ...txForm, amount: e.target.value })} required />
                    </div>
                    <div className="flex-1 min-w-[150px]">
                      <Input label="Nota" type="text" placeholder="ej. Pago parcial" value={txForm.note} onChange={e => setTxForm({ ...txForm, note: e.target.value })} />
                    </div>
                    <Btn type="submit">Guardar</Btn>
                  </form>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-[#3D2B1F] mb-4" style={{ fontFamily: 'Fraunces, serif' }}>Historial de cuenta</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-[#E8D9C0]">
                          <th className="text-left text-xs text-[#8C7B6E] py-2">Fecha</th>
                          <th className="text-left text-xs text-[#8C7B6E] py-2">Tipo</th>
                          <th className="text-left text-xs text-[#8C7B6E] py-2">Monto</th>
                          <th className="text-left text-xs text-[#8C7B6E] py-2">Nota</th>
                        </tr>
                      </thead>
                      <tbody>
                        {custTransactions.map(t => (
                          <tr key={t.id} className="border-b border-[#E8D9C0] last:border-0">
                            <td className="py-2 font-mono text-xs text-[#8C7B6E]">{t.date}</td>
                            <td className="py-2">
                              <Badge color={t.type === 'cargo' ? 'bg-[#FDF3C0] text-[#6B4226]' : 'bg-[#D4EAD7] text-[#4A7C59]'}>
                                {t.type === 'cargo' ? '+ Cargo' : '- Abono'}
                              </Badge>
                            </td>
                            <td className="py-2 font-mono font-semibold text-[#3D2B1F]">{fmt(t.amount)}</td>
                            <td className="py-2 text-[#8C7B6E]">{t.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>
            ) : (
              <Card className="p-12 text-center text-[#8C7B6E]">
                Selecciona un cliente de la lista para ver sus detalles y registrar cargos o abonos.
              </Card>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Prices Page ──────────────────────────────────────────────────────────────

function PricesPage({ products, setProducts }) {
  const [prices, setPrices] = useState(
    products.reduce((acc, p) => ({ ...acc, [p.id]: p.price.toString() }), {})
  )
  const [msg, setMsg] = useState('')

  function handleSave(e) {
    e.preventDefault()
    setProducts(products.map(p => ({
      ...p,
      price: parseFloat(prices[p.id]) || p.price
    })))
    setMsg('✅ Precios actualizados correctamente.')
    setTimeout(() => setMsg(''), 3000)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#3D2B1F]" style={{ fontFamily: 'Fraunces, serif' }}>Precios de productos</h1>
        <p className="text-[#8C7B6E] text-sm mt-1">Modifica los precios de venta al público</p>
      </div>

      {msg && <p className="mb-4 text-sm bg-[#D4EAD7] text-[#4A7C59] rounded-xl px-4 py-2">{msg}</p>}

      <Card className="p-6">
        <form onSubmit={handleSave}>
          <div className="divide-y divide-[#E8D9C0] mb-6">
            {products.map(p => (
              <div key={p.id} className="py-3 flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-[#3D2B1F]">{p.name}</p>
                  <p className="text-xs text-[#8C7B6E]">Unidad: {p.unit}</p>
                </div>
                <div className="w-36">
                  <Input
                    label="Precio ($)"
                    type="number"
                    step="0.5"
                    value={prices[p.id] || ''}
                    onChange={e => setPrices({ ...prices, [p.id]: e.target.value })}
                  />
                </div>
              </div>
            ))}
          </div>
          <Btn type="submit">Guardar cambios</Btn>
        </form>
      </Card>
    </div>
  )
}

// ─── Main App Component ───────────────────────────────────────────────────────

export default function App() {
  const [user, setUser] = useState(null)
  const [currentPage, setCurrentPage] = useState('login')
  const [products, setProducts] = useState(initProducts)
  const [customers, setCustomers] = useState(initCustomers)
  const [movements, setMovements] = useState(initMovements)
  const [transactions, setTransactions] = useState(initTransactions)

  if (!user || currentPage === 'login') {
    return (
      <LoginPage
        onLogin={u => {
          setUser(u)
          setCurrentPage('role')
        }}
      />
    )
  }

  if (currentPage === 'role') {
    return (
      <RolePage
        user={user}
        onContinue={() => setCurrentPage('dashboard')}
        onLogout={() => {
          setUser(null)
          setCurrentPage('login')
        }}
      />
    )
  }

  return (
    <div className="min-h-screen bg-[#FAF3E0] text-[#3D2B1F]">
      <Topbar
        user={user}
        currentPage={currentPage}
        onNavigate={p => setCurrentPage(p)}
        onLogout={() => {
          setUser(null)
          setCurrentPage('login')
        }}
      />
      <main>
        {currentPage === 'dashboard' && (
          <DashboardPage user={user} products={products} customers={customers} onNavigate={setCurrentPage} />
        )}
        {currentPage === 'inventory' && (
          <InventoryPage products={products} setProducts={setProducts} movements={movements} setMovements={setMovements} />
        )}
        {currentPage === 'credits' && (
          <CreditsPage customers={customers} setCustomers={setCustomers} transactions={transactions} setTransactions={setTransactions} />
        )}
        {currentPage === 'prices' && user.role === 'owner' && (
          <PricesPage products={products} setProducts={setProducts} />
        )}
      </main>
    </div>
  )
}
