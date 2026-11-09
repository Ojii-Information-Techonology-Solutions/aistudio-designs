import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Layers,
  Check,
  Copy,
  AlertTriangle,
  Info,
  CheckCircle2,
  Sliders,
  Bell,
  Eye,
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck,
  Search,
  Lock,
  ArrowRight,
  Heart,
  ShoppingBag,
  Maximize2
} from 'lucide-react';
import {
  Button,
  Switch,
  Spinner,
  Dialog,
  ConfirmDialog,
  AlertDialog,
  Input,
  Textarea,
  Checkbox,
  RadioGroup,
  Badge,
  Slider,
  Accordion,
  Skeleton,
  Toast,
  ToastType,
  Tabs
} from './ui';

interface DesignKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type SectionKey =
  | 'overview'
  | 'typography'
  | 'buttons'
  | 'forms'
  | 'dialogs'
  | 'feedback'
  | 'badges'
  | 'navigation'
  | 'tokens';

export const DesignKitModal: React.FC<DesignKitModalProps> = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState<SectionKey>('overview');

  // Interactive UI playground states
  const [switchState1, setSwitchState1] = useState(true);
  const [switchState2, setSwitchState2] = useState(false);
  const [switchState3, setSwitchState3] = useState(true);

  const [checkboxState1, setCheckboxState1] = useState(true);
  const [checkboxState2, setCheckboxState2] = useState(false);
  const [checkboxState3, setCheckboxState3] = useState(true);

  const [radioVal, setRadioVal] = useState('silk-faille');
  const [sliderVal, setSliderVal] = useState(65);
  const [sliderPrice, setSliderPrice] = useState(1850);

  const [inputVal, setInputVal] = useState('Rue du Faubourg Saint-Honoré');
  const [inputSearch, setInputSearch] = useState('Gala Silhouette');
  const [textareaVal, setTextareaVal] = useState('Please taper the waistline by 1.5cm and adjust hem to floor grazing length.');
  const [selectVal, setSelectVal] = useState('paris');

  // Dialog live states
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [confirmVariant, setConfirmVariant] = useState<'danger' | 'primary' | 'luxury-gold'>('primary');
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState<'info' | 'success' | 'warning' | 'error'>('success');
  const [isCustomDialogOpen, setIsCustomDialogOpen] = useState(false);
  const [isDialogLoading, setIsDialogLoading] = useState(false);

  // Button loading states
  const [btnLoading, setBtnLoading] = useState(false);

  // Toast notifications state
  const [toasts, setToasts] = useState<Array<{ id: string; type: ToastType; title: string; message: string }>>([
    {
      id: 'demo-toast-1',
      type: 'success',
      title: 'Silhouette Saved to Wishlist',
      message: 'Added to your private Haute Couture bridal curations.'
    }
  ]);

  // Tab state
  const [activeTabUnderline, setActiveTabUnderline] = useState('tab1');
  const [activeTabPill, setActiveTabPill] = useState('tab1');
  const [activeTabBoxed, setActiveTabBoxed] = useState('tab1');

  // Badges state for removable demo
  const [badgesList, setBadgesList] = useState([
    { id: '1', label: 'Como Silk', variant: 'charcoal' as const },
    { id: '2', label: 'Made to Order', variant: 'gold' as const },
    { id: '3', label: 'Ready to Ship', variant: 'olive' as const },
    { id: '4', label: 'Limited Run 1/12', variant: 'wine' as const },
    { id: '5', label: 'Dry Clean Only', variant: 'neutral' as const }
  ]);

  // Copy feedback helper
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const triggerToast = (type: ToastType, title: string, message: string) => {
    const newId = `toast-${Date.now()}`;
    setToasts(prev => [...prev, { id: newId, type, title, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== newId));
    }, 5000);
  };

  if (!isOpen) return null;

  const sections: Array<{ key: SectionKey; label: string; count: string }> = [
    { key: 'overview', label: 'Design System Overview', count: '9 Modules' },
    { key: 'dialogs', label: 'Dialogs & Modals', count: '4 Variants' },
    { key: 'buttons', label: 'Buttons & Triggers', count: '7 Styles' },
    { key: 'forms', label: 'Inputs, Switches & Form UI', count: '8 Controls' },
    { key: 'feedback', label: 'Spinners & Loaders', count: '5 Spinners' },
    { key: 'badges', label: 'Badges, Tags & Chips', count: '7 Themes' },
    { key: 'navigation', label: 'Tabs & Accordions', count: '4 Controls' },
    { key: 'typography', label: 'Bold Typography Spec', count: 'Scale & Ratios' },
    { key: 'tokens', label: 'Color Tokens & Contrast', count: 'WCAG AA' }
  ];

  return (
    <div
      id="design-kit-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 overflow-hidden animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="design-kit-modal-container"
        className="relative bg-[#FDFCFB] w-full max-w-6xl h-[92vh] border border-[#E5E1DA] shadow-2xl flex flex-col overflow-hidden text-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-[#E5E1DA] flex items-center justify-between bg-[#FDFCFB] shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#1A1A1A] text-white">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-xl sm:text-2xl font-light text-[#1A1A1A] tracking-tight">
                  CHARLÈNE Atelier <span className="italic font-normal">Design Kit</span>
                </h2>
                <span className="text-[9px] uppercase tracking-[0.25em] bg-[#C5A059] text-white px-2 py-0.5 font-medium">
                  v2.0 Couture
                </span>
              </div>
              <p className="text-[10px] text-gray-500 font-sans uppercase tracking-[0.25em]">
                Complete UI Component Kit • Bold Typography • Dialogs • Feedback • Form Controls
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="design-kit-close-btn"
              onClick={onClose}
              className="p-2 border border-[#E5E1DA] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] transition-colors"
              aria-label="Close design kit"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Body: Sidebar + Main Stage */}
        <div className="flex-1 flex flex-col md:flex-row min-h-0 overflow-hidden">
          {/* Navigation Sidebar */}
          <div className="w-full md:w-64 border-r border-[#E5E1DA] bg-[#F2F0ED] p-4 flex md:flex-col gap-1 overflow-x-auto md:overflow-y-auto shrink-0 font-sans">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium px-3 py-2 hidden md:block">
              Component Index
            </span>
            {sections.map((sec) => (
              <button
                key={sec.key}
                onClick={() => setActiveSection(sec.key)}
                className={`w-full text-left px-3.5 py-2.5 text-xs transition-all flex items-center justify-between whitespace-nowrap md:whitespace-normal ${
                  activeSection === sec.key
                    ? 'bg-[#1A1A1A] text-white font-medium shadow-xs'
                    : 'text-gray-700 hover:bg-[#E5E1DA]'
                }`}
              >
                <span>{sec.label}</span>
                <span
                  className={`text-[9px] px-1.5 py-0.5 tracking-wider hidden md:inline-block ${
                    activeSection === sec.key ? 'text-gray-300' : 'text-gray-400'
                  }`}
                >
                  {sec.count}
                </span>
              </button>
            ))}
          </div>

          {/* Main Stage Content View */}
          <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-8 bg-[#FDFCFB]">
            {/* 1. OVERVIEW SECTION */}
            {activeSection === 'overview' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="border-b border-[#E5E1DA] pb-6 space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-sans font-semibold">
                    Atelier Component Architecture
                  </span>
                  <h3 className="font-serif text-3xl font-light text-[#1A1A1A]">
                    Design System & UI Library
                  </h3>
                  <p className="text-xs text-gray-600 font-sans max-w-2xl leading-relaxed">
                    A comprehensive, high-contrast design kit crafted specifically for luxury haute couture and atelier e-commerce. Built with deliberate geometric proportions, high optical typography hierarchy, robust feedback states, and accessible WCAG AA contrast.
                  </p>
                </div>

                {/* Quick Feature Matrix Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 bg-[#F2F0ED] border border-[#E5E1DA] space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-medium font-sans">
                      01 / Typography
                    </span>
                    <h4 className="font-serif text-lg font-light text-[#1A1A1A]">Light Serif Display</h4>
                    <p className="text-[11px] text-gray-500 font-sans leading-relaxed">
                      Italiana and Playfair display headings paired with tracked uppercase sans micro-copy for extreme luxury contrast.
                    </p>
                  </div>

                  <div className="p-5 bg-[#F2F0ED] border border-[#E5E1DA] space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-medium font-sans">
                      02 / Interactive UI
                    </span>
                    <h4 className="font-serif text-lg font-light text-[#1A1A1A]">Dialogs & Feedback</h4>
                    <p className="text-[11px] text-gray-500 font-sans leading-relaxed">
                      Confirm prompts, alert modals, notification toasts, luxury dual-ring spinners, and animated toggle switches.
                    </p>
                  </div>

                  <div className="p-5 bg-[#F2F0ED] border border-[#E5E1DA] space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-medium font-sans">
                      03 / Color Chemistry
                    </span>
                    <h4 className="font-serif text-lg font-light text-[#1A1A1A]">Subtle Neutrals</h4>
                    <p className="text-[11px] text-gray-500 font-sans leading-relaxed">
                      Warm canvas ivory (<code className="font-mono text-[10px] bg-white px-1">#FDFCFB</code>), deep charcoal (<code className="font-mono text-[10px] bg-white px-1">#1A1A1A</code>), and champagne accents.
                    </p>
                  </div>
                </div>

                {/* Live Quick Playground Showcase */}
                <div className="p-6 border border-[#E5E1DA] bg-white space-y-6">
                  <div className="flex items-center justify-between border-b border-[#E5E1DA] pb-3">
                    <h4 className="font-serif text-lg font-light text-[#1A1A1A]">
                      Live Interactive UI Playground
                    </h4>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-sans">
                      Interactive Demos
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                    {/* Switch Demo */}
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-wider text-gray-500 block font-sans">
                        Luxury Switch
                      </span>
                      <Switch
                        checked={switchState1}
                        onChange={setSwitchState1}
                        label="White-Glove Courier"
                        sublabel="VIP guaranteed 48h delivery"
                      />
                    </div>

                    {/* Spinner Demo */}
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-wider text-gray-500 block font-sans">
                        Dual-Ring Spinner
                      </span>
                      <div className="flex items-center gap-3">
                        <Spinner variant="dual-ring" size="md" color="gold" />
                        <span className="text-xs font-serif text-[#1A1A1A]">Weaving Silk Faille...</span>
                      </div>
                    </div>

                    {/* Dialog Demo */}
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-wider text-gray-500 block font-sans">
                        Confirm Dialog
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setConfirmVariant('danger');
                          setIsConfirmOpen(true);
                        }}
                      >
                        Launch Confirm
                      </Button>
                    </div>

                    {/* Toast Demo */}
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-wider text-gray-500 block font-sans">
                        Toast Alert
                      </span>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => triggerToast('success', 'Order Dispatched', 'Tracking #AUR-9821 sent to client.')}
                      >
                        Fire Toast
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. DIALOGS & MODALS SECTION */}
            {activeSection === 'dialogs' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="border-b border-[#E5E1DA] pb-4 space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-sans font-semibold">
                    Overlay Systems
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A]">
                    Dialogs, Confirmations & Alerts
                  </h3>
                  <p className="text-xs text-gray-500 font-sans">
                    Accessible, keyboard-navigable (Esc key support) modal dialogues with clear action hierarchies.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Confirm Dialog Trigger Card */}
                  <div className="p-6 bg-[#F2F0ED] border border-[#E5E1DA] space-y-4 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-[#C5A059]" />
                        <h4 className="font-serif text-lg font-light text-[#1A1A1A]">
                          Confirmation Dialog
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600 font-sans leading-relaxed">
                        Presents the client with an explicit confirmation step before committing irreversible atelier modifications or deleting bespoke measurements.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setConfirmVariant('primary');
                          setIsConfirmOpen(true);
                        }}
                      >
                        Standard Confirm
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => {
                          setConfirmVariant('danger');
                          setIsConfirmOpen(true);
                        }}
                      >
                        Destructive / Danger
                      </Button>
                    </div>
                  </div>

                  {/* Alert Dialog Trigger Card */}
                  <div className="p-6 bg-[#F2F0ED] border border-[#E5E1DA] space-y-4 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Info className="w-4 h-4 text-[#1A1A1A]" />
                        <h4 className="font-serif text-lg font-light text-[#1A1A1A]">
                          Alert Notice Dialog
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600 font-sans leading-relaxed">
                        Dispatches single-action modal notifications for process success, atelier capacity warnings, or security alerts.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => {
                          setAlertType('success');
                          setIsAlertOpen(true);
                        }}
                      >
                        Success Alert
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => {
                          setAlertType('warning');
                          setIsAlertOpen(true);
                        }}
                      >
                        Warning Alert
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => {
                          setAlertType('error');
                          setIsAlertOpen(true);
                        }}
                      >
                        Error Alert
                      </Button>
                    </div>
                  </div>

                  {/* Custom Rich Content Modal Trigger Card */}
                  <div className="p-6 bg-[#F2F0ED] border border-[#E5E1DA] space-y-4 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#C5A059]" />
                        <h4 className="font-serif text-lg font-light text-[#1A1A1A]">
                          Bespoke Atelier Request Modal
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600 font-sans leading-relaxed">
                        Full custom dialog container with title, micro-eyebrow, custom form controls, and footer button actions.
                      </p>
                    </div>

                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setIsCustomDialogOpen(true)}
                    >
                      Open Bespoke Request Modal
                    </Button>
                  </div>

                  {/* Toast Notifications Panel */}
                  <div className="p-6 bg-[#F2F0ED] border border-[#E5E1DA] space-y-4 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Bell className="w-4 h-4 text-[#1A1A1A]" />
                        <h4 className="font-serif text-lg font-light text-[#1A1A1A]">
                          Toast Banners & Notifications
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600 font-sans leading-relaxed">
                        Floating asynchronous notifications for cart additions, coupon applications, and status updates.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => triggerToast('success', 'Promo Code Applied', 'Privilege code AURA10 discounted 10%.')}
                      >
                        Success Toast
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => triggerToast('warning', 'Low Fabric Stock', 'Only 3 meters remaining in Lyon Emerald Silk.')}
                      >
                        Warning Toast
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => triggerToast('info', 'Courier Dispatched', 'Your bespoke package is currently en route.')}
                      >
                        Info Toast
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. BUTTONS & ACTIONS */}
            {activeSection === 'buttons' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="border-b border-[#E5E1DA] pb-4 space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-sans font-semibold">
                    Action Triggers
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A]">
                    Buttons & Interactive Controls
                  </h3>
                  <p className="text-xs text-gray-500 font-sans">
                    Refined luxury buttons with 2x horizontal padding ratios, tracked uppercase typography, and loading states.
                  </p>
                </div>

                {/* Button Variants Grid */}
                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-light text-[#1A1A1A]">
                    Style Variants
                  </h4>
                  <div className="flex flex-wrap gap-4 items-center p-6 bg-[#F2F0ED] border border-[#E5E1DA]">
                    <Button variant="primary">Primary Solid</Button>
                    <Button variant="secondary">Secondary Stone</Button>
                    <Button variant="outline">Outline Editorial</Button>
                    <Button variant="ghost">Ghost Accent</Button>
                    <Button variant="luxury-gold">Gold Privilege</Button>
                    <Button variant="danger">Danger Archive</Button>
                    <Button variant="link">Underlined Link</Button>
                  </div>
                </div>

                {/* Button Sizes */}
                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-light text-[#1A1A1A]">
                    Button Sizes
                  </h4>
                  <div className="flex flex-wrap gap-4 items-center p-6 bg-[#F2F0ED] border border-[#E5E1DA]">
                    <Button variant="primary" size="xs">Extra Small (xs)</Button>
                    <Button variant="primary" size="sm">Small (sm)</Button>
                    <Button variant="primary" size="md">Medium Default (md)</Button>
                    <Button variant="primary" size="lg">Large Hero (lg)</Button>
                  </div>
                </div>

                {/* Button Interactive States (Loading, Icons, Disabled) */}
                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-light text-[#1A1A1A]">
                    Functional States & Icons
                  </h4>
                  <div className="flex flex-wrap gap-4 items-center p-6 bg-[#F2F0ED] border border-[#E5E1DA]">
                    <Button
                      variant="primary"
                      isLoading={btnLoading}
                      onClick={() => {
                        setBtnLoading(true);
                        setTimeout(() => setBtnLoading(false), 2000);
                      }}
                    >
                      Click for Loading State
                    </Button>
                    <Button variant="primary" leftIcon={<ShoppingBag className="w-3.5 h-3.5" />}>
                      With Leading Icon
                    </Button>
                    <Button variant="outline" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                      With Trailing Icon
                    </Button>
                    <Button variant="primary" disabled>
                      Disabled Action
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* 4. FORMS, INPUTS & SWITCHES */}
            {activeSection === 'forms' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="border-b border-[#E5E1DA] pb-4 space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-sans font-semibold">
                    Data Entry Controls
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A]">
                    Inputs, Switches, Selects & Sliders
                  </h3>
                  <p className="text-xs text-gray-500 font-sans">
                    Minimalist geometric input fields with high-contrast active borders and bespoke custom controls.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Switches Card */}
                  <div className="p-6 bg-[#F2F0ED] border border-[#E5E1DA] space-y-4">
                    <h4 className="font-serif text-lg font-light text-[#1A1A1A] border-b border-[#E5E1DA] pb-2">
                      Toggle Switches
                    </h4>
                    <div className="space-y-4">
                      <Switch
                        checked={switchState1}
                        onChange={setSwitchState1}
                        label="White-Glove Insured Delivery"
                        sublabel="Direct courier with protective garment cover"
                        size="md"
                      />
                      <Switch
                        checked={switchState2}
                        onChange={setSwitchState2}
                        label="Bespoke Monogram Embroidery"
                        sublabel="Hand-stitched interior collar initials"
                        size="md"
                      />
                      <Switch
                        checked={switchState3}
                        onChange={setSwitchState3}
                        label="Private Salon Preview Notifications"
                        sublabel="VIP access to Lyon silk releases"
                        size="sm"
                      />
                      <Switch
                        checked={false}
                        onChange={() => {}}
                        label="Disabled Archived Preference"
                        sublabel="Currently unavailable for this collection"
                        disabled
                        size="md"
                      />
                    </div>
                  </div>

                  {/* Sliders Card */}
                  <div className="p-6 bg-[#F2F0ED] border border-[#E5E1DA] space-y-4">
                    <h4 className="font-serif text-lg font-light text-[#1A1A1A] border-b border-[#E5E1DA] pb-2">
                      Range Sliders
                    </h4>
                    <div className="space-y-6">
                      <Slider
                        label="Maximum Gown Budget"
                        value={sliderPrice}
                        min={500}
                        max={5000}
                        step={50}
                        unit="EUR"
                        onChange={setSliderPrice}
                      />
                      <Slider
                        label="Train Length Specification"
                        value={sliderVal}
                        min={0}
                        max={150}
                        step={5}
                        unit="cm"
                        onChange={setSliderVal}
                      />
                    </div>
                  </div>

                  {/* Text Inputs */}
                  <div className="p-6 bg-[#F2F0ED] border border-[#E5E1DA] space-y-4">
                    <h4 className="font-serif text-lg font-light text-[#1A1A1A] border-b border-[#E5E1DA] pb-2">
                      Text Inputs & Variants
                    </h4>
                    <div className="space-y-4">
                      <Input
                        label="Street Address (Outline Default)"
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        onClear={() => setInputVal('')}
                        placeholder="Enter delivery address..."
                      />
                      <Input
                        label="Silhouette Search (With Icon)"
                        leftIcon={<Search className="w-4 h-4" />}
                        value={inputSearch}
                        onChange={(e) => setInputSearch(e.target.value)}
                        onClear={() => setInputSearch('')}
                        placeholder="Search gown or silk..."
                      />
                      <Input
                        label="Error Field Validation"
                        value="invalid-postal-code"
                        error="Postal code must match French metropolitan format (e.g. 75008)"
                        onChange={() => {}}
                      />
                    </div>
                  </div>

                  {/* Checkboxes & Radio Selection */}
                  <div className="p-6 bg-[#F2F0ED] border border-[#E5E1DA] space-y-4">
                    <h4 className="font-serif text-lg font-light text-[#1A1A1A] border-b border-[#E5E1DA] pb-2">
                      Checkboxes & Radios
                    </h4>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <span className="text-[10px] uppercase tracking-wider text-gray-500 block font-sans">
                          Geometric Square Checkboxes
                        </span>
                        <div className="space-y-2">
                          <Checkbox
                            checked={checkboxState1}
                            onChange={setCheckboxState1}
                            label="Include Complimentary Embossed Wax Gift Card"
                            sublabel="Calligraphed in black archival ink"
                          />
                          <Checkbox
                            checked={checkboxState2}
                            onChange={setCheckboxState2}
                            label="Request In-Home Atelier Tailor Fitting"
                            sublabel="Available in Paris, London, Milan & NYC"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-[#E5E1DA]">
                        <span className="text-[10px] uppercase tracking-wider text-gray-500 block font-sans">
                          Radio Option Group
                        </span>
                        <RadioGroup
                          name="fabric-selection"
                          value={radioVal}
                          onChange={setRadioVal}
                          options={[
                            { value: 'silk-faille', label: '100% Como Silk Faille', sublabel: 'Structured drape with subtle luster' },
                            { value: 'mulberry-charmeuse', label: 'Heavy Mulberry Charmeuse', sublabel: 'Fluid liquid drape with luminous glow' },
                            { value: 'french-crepe', label: 'Matte French Silk Crepe', sublabel: 'Sculptural architectural silhouette' }
                          ]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. FEEDBACK, SPINNERS & SKELETONS */}
            {activeSection === 'feedback' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="border-b border-[#E5E1DA] pb-4 space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-sans font-semibold">
                    Visual Feedback
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A]">
                    Spinners, Loading Indicators & Skeletons
                  </h3>
                  <p className="text-xs text-gray-500 font-sans">
                    Custom motion indicators for asynchronous operations, tailoring calculations, and image previews.
                  </p>
                </div>

                {/* Spinner Variants */}
                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-light text-[#1A1A1A]">
                    Spinner Archetypes
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 p-6 bg-[#F2F0ED] border border-[#E5E1DA] text-center">
                    <div className="space-y-3 p-4 bg-white border border-[#E5E1DA] flex flex-col items-center justify-center">
                      <Spinner variant="circular" size="md" color="dark" />
                      <span className="text-[10px] uppercase tracking-wider text-gray-600 font-sans">Circular</span>
                    </div>
                    <div className="space-y-3 p-4 bg-white border border-[#E5E1DA] flex flex-col items-center justify-center">
                      <Spinner variant="dual-ring" size="md" color="gold" />
                      <span className="text-[10px] uppercase tracking-wider text-gray-600 font-sans">Dual-Ring Couture</span>
                    </div>
                    <div className="space-y-3 p-4 bg-white border border-[#E5E1DA] flex flex-col items-center justify-center">
                      <Spinner variant="pulse-dots" size="md" color="dark" />
                      <span className="text-[10px] uppercase tracking-wider text-gray-600 font-sans">Pulse Dots</span>
                    </div>
                    <div className="space-y-3 p-4 bg-white border border-[#E5E1DA] flex flex-col items-center justify-center">
                      <Spinner variant="bars" size="md" color="dark" />
                      <span className="text-[10px] uppercase tracking-wider text-gray-600 font-sans">Waveform Bars</span>
                    </div>
                    <div className="space-y-3 p-4 bg-white border border-[#E5E1DA] flex flex-col items-center justify-center">
                      <Spinner variant="line" size="md" color="gold" />
                      <span className="text-[10px] uppercase tracking-wider text-gray-600 font-sans">Indeterminate Line</span>
                    </div>
                  </div>
                </div>

                {/* Spinner Sizes & Colors */}
                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-light text-[#1A1A1A]">
                    Sizes & Color Themes
                  </h4>
                  <div className="p-6 bg-[#F2F0ED] border border-[#E5E1DA] flex flex-wrap gap-8 items-center justify-around">
                    <Spinner size="xs" variant="circular" label="XS (14px)" color="dark" />
                    <Spinner size="sm" variant="dual-ring" label="SM (20px)" color="gold" />
                    <Spinner size="md" variant="circular" label="MD (32px)" color="dark" />
                    <Spinner size="lg" variant="dual-ring" label="LG (48px)" color="gold" />
                    <Spinner size="xl" variant="circular" label="XL (64px)" color="dark" />
                  </div>
                </div>

                {/* Skeleton Loading States */}
                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-light text-[#1A1A1A]">
                    Skeleton Shimmer Placeholders
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-[#F2F0ED] border border-[#E5E1DA]">
                    {/* Card Skeleton */}
                    <div className="p-4 bg-white border border-[#E5E1DA] space-y-3">
                      <Skeleton variant="rectangular" height={160} />
                      <div className="space-y-2 pt-2">
                        <Skeleton variant="text" width="70%" height={14} />
                        <Skeleton variant="text" width="40%" height={10} />
                        <Skeleton variant="text" width="90%" height={10} />
                      </div>
                    </div>

                    {/* Profile & List Skeleton */}
                    <div className="p-4 bg-white border border-[#E5E1DA] space-y-4">
                      <div className="flex items-center gap-3">
                        <Skeleton variant="circular" width={40} height={40} />
                        <div className="space-y-1.5 flex-1">
                          <Skeleton variant="text" width="50%" height={12} />
                          <Skeleton variant="text" width="30%" height={10} />
                        </div>
                      </div>
                      <Skeleton variant="rectangular" height={70} />
                      <div className="flex justify-end gap-2 pt-1">
                        <Skeleton variant="rectangular" width={80} height={32} />
                        <Skeleton variant="rectangular" width={100} height={32} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 6. BADGES, CHIPS & TAGS */}
            {activeSection === 'badges' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="border-b border-[#E5E1DA] pb-4 space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-sans font-semibold">
                    Taxonomy & Status
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A]">
                    Badges, Status Chips & Pills
                  </h3>
                  <p className="text-xs text-gray-500 font-sans">
                    Single-line status indicators sized to labels with no wrapped text and elegant borders.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-light text-[#1A1A1A]">
                    Palette Variants
                  </h4>
                  <div className="flex flex-wrap gap-3 p-6 bg-[#F2F0ED] border border-[#E5E1DA] items-center">
                    <Badge variant="charcoal">Charcoal Noir</Badge>
                    <Badge variant="gold">Gold Atelier</Badge>
                    <Badge variant="olive">Emerald In-Stock</Badge>
                    <Badge variant="wine">Burgundy Limited</Badge>
                    <Badge variant="neutral">Stone Neutral</Badge>
                    <Badge variant="champagne">Champagne Luxe</Badge>
                    <Badge variant="outline">Outline Monochrome</Badge>
                  </div>
                </div>

                {/* Dismissible Chips */}
                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-light text-[#1A1A1A]">
                    Interactive Filter Chips (Click X to Remove)
                  </h4>
                  <div className="flex flex-wrap gap-2.5 p-6 bg-[#F2F0ED] border border-[#E5E1DA] items-center">
                    {badgesList.map(b => (
                      <Badge
                        key={b.id}
                        variant={b.variant}
                        onRemove={() => setBadgesList(prev => prev.filter(item => item.id !== b.id))}
                      >
                        {b.label}
                      </Badge>
                    ))}
                    {badgesList.length === 0 && (
                      <Button
                        size="xs"
                        variant="outline"
                        onClick={() =>
                          setBadgesList([
                            { id: '1', label: 'Como Silk', variant: 'charcoal' },
                            { id: '2', label: 'Made to Order', variant: 'gold' },
                            { id: '3', label: 'Ready to Ship', variant: 'olive' }
                          ])
                        }
                      >
                        Reset Chips
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 7. NAVIGATION, TABS & ACCORDIONS */}
            {activeSection === 'navigation' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="border-b border-[#E5E1DA] pb-4 space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-sans font-semibold">
                    Content Hierarchy
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A]">
                    Tabs, Segmented Controls & Accordions
                  </h3>
                  <p className="text-xs text-gray-500 font-sans">
                    Structured navigation controls for sorting through silhouettes, tailoring specs, and occasion lookbooks.
                  </p>
                </div>

                {/* Tabs Variants */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 block font-sans">
                      Underline Editorial Tabs
                    </span>
                    <div className="p-4 bg-[#F2F0ED] border border-[#E5E1DA]">
                      <Tabs
                        variant="underline"
                        activeTab={activeTabUnderline}
                        onChange={setActiveTabUnderline}
                        tabs={[
                          { id: 'tab1', label: 'Silk Silhouettes', badge: 12 },
                          { id: 'tab2', label: 'Evening Gowns', badge: 8 },
                          { id: 'tab3', label: 'Made to Order', badge: 'VIP' }
                        ]}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 block font-sans">
                      Segmented Pill Tabs
                    </span>
                    <div className="p-4 bg-[#F2F0ED] border border-[#E5E1DA]">
                      <Tabs
                        variant="pill"
                        activeTab={activeTabPill}
                        onChange={setActiveTabPill}
                        tabs={[
                          { id: 'tab1', label: 'All Curations' },
                          { id: 'tab2', label: 'In Showroom' },
                          { id: 'tab3', label: 'Archive 2026' }
                        ]}
                      />
                    </div>
                  </div>
                </div>

                {/* Collapsible Accordion */}
                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-light text-[#1A1A1A]">
                    Collapsible Accordion
                  </h4>
                  <div className="p-6 bg-[#F2F0ED] border border-[#E5E1DA]">
                    <Accordion
                      defaultExpanded={['acc-1']}
                      items={[
                        {
                          id: 'acc-1',
                          title: 'Como Silk & Lyon Weaving Provenance',
                          badge: 'Heritage',
                          content:
                            'Every meter of silk used in our atelier is spun from 100% Mulberry silk cocoon filaments by historic mills in Como, Italy and Lyon, France. The weave is subjected to strict optical inspections.'
                        },
                        {
                          id: 'acc-2',
                          title: 'Bespoke Hemming & Atelier Alterations Service',
                          badge: 'Complimentary',
                          content:
                            'Clients may specify exact bust, waist, and floor-grazing length measurements during checkout. Our master seamstresses execute hand-rolled French seams tailored to your proportions.'
                        },
                        {
                          id: 'acc-3',
                          title: 'White-Glove Insured Global Courier & Returns',
                          badge: 'Worldwide',
                          content:
                            'Dispatched in archival, breathable cotton garment covers with cedarwood hangers. Complimentary DHL Express pickup is available within 30 days for unaltered silhouettes.'
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 8. TYPOGRAPHY SPECIFICATION */}
            {activeSection === 'typography' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="border-b border-[#E5E1DA] pb-4 space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-sans font-semibold">
                    Typographic Archetype
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A]">
                    Bold Typography Scale & Ratios
                  </h3>
                  <p className="text-xs text-gray-500 font-sans">
                    Pairing display serif headlines with tracked uppercase sans-serif micro-labels.
                  </p>
                </div>

                <div className="space-y-6 p-6 bg-[#F2F0ED] border border-[#E5E1DA]">
                  <div className="border-b border-[#E5E1DA] pb-4 space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-sans">
                      Display Headline / Hero Display (48px - 64px)
                    </span>
                    <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#1A1A1A] tracking-tighter">
                      The Architecture of Como Silk
                    </h1>
                  </div>

                  <div className="border-b border-[#E5E1DA] pb-4 space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-sans">
                      H1 / Page Title (32px - 40px)
                    </span>
                    <h2 className="font-serif text-3xl font-light text-[#1A1A1A]">
                      Haute Couture Spring Collection
                    </h2>
                  </div>

                  <div className="border-b border-[#E5E1DA] pb-4 space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-sans">
                      H2 / Section Title (24px - 28px)
                    </span>
                    <h3 className="font-serif text-2xl font-light text-[#1A1A1A]">
                      Bespoke Tailoring & Measurements
                    </h3>
                  </div>

                  <div className="border-b border-[#E5E1DA] pb-4 space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-sans">
                      Micro-Eyebrow / Tracked Uppercase Sans (9px - 11px, tracking 0.25em - 0.3em)
                    </span>
                    <p className="font-sans text-xs uppercase tracking-[0.25em] font-medium text-[#C5A059]">
                      Atelier Haute Couture • Paris Salon • Private Curations
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-sans">
                      Body Copy (14px - 16px, line-height 1.6 - 1.7)
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-gray-700 leading-relaxed max-w-2xl">
                      Crafted from heavy Mulberry silk charmeuse with an open cowl back and sweeping godet train. Each seam is hand-finished in our Paris atelier with French seams and delicate silk-covered buttons.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 9. COLOR TOKENS & CONTRAST */}
            {activeSection === 'tokens' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="border-b border-[#E5E1DA] pb-4 space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-sans font-semibold">
                    Color Chemistry
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A]">
                    Design Tokens & WCAG AA Contrast
                  </h3>
                  <p className="text-xs text-gray-500 font-sans">
                    Restrained, warm neutral palette avoiding harsh saturated cliches.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white border border-[#E5E1DA] space-y-3">
                    <div className="h-16 bg-[#FDFCFB] border border-[#E5E1DA] flex items-center justify-center">
                      <span className="text-xs font-mono text-[#1A1A1A]">#FDFCFB</span>
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-normal text-[#1A1A1A]">Canvas Ivory</h4>
                      <p className="text-[10px] text-gray-500 font-sans">Primary page background canvas</p>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-[#E5E1DA] space-y-3">
                    <div className="h-16 bg-[#1A1A1A] flex items-center justify-center">
                      <span className="text-xs font-mono text-white">#1A1A1A</span>
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-normal text-[#1A1A1A]">Charcoal Noir</h4>
                      <p className="text-[10px] text-gray-500 font-sans">Headings, primary buttons, borders</p>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-[#E5E1DA] space-y-3">
                    <div className="h-16 bg-[#F2F0ED] border border-[#E5E1DA] flex items-center justify-center">
                      <span className="text-xs font-mono text-[#1A1A1A]">#F2F0ED</span>
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-normal text-[#1A1A1A]">Stone Surface</h4>
                      <p className="text-[10px] text-gray-500 font-sans">Secondary cards, modals, sidebars</p>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-[#E5E1DA] space-y-3">
                    <div className="h-16 bg-[#E5E1DA] flex items-center justify-center">
                      <span className="text-xs font-mono text-[#1A1A1A]">#E5E1DA</span>
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-normal text-[#1A1A1A]">Hairline Border</h4>
                      <p className="text-[10px] text-gray-500 font-sans">Dividers, input outlines, cards</p>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-[#E5E1DA] space-y-3">
                    <div className="h-16 bg-[#C5A059] flex items-center justify-center">
                      <span className="text-xs font-mono text-white">#C5A059</span>
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-normal text-[#1A1A1A]">Atelier Gold</h4>
                      <p className="text-[10px] text-gray-500 font-sans">Privilege accents, badges, highlights</p>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-[#E5E1DA] space-y-3">
                    <div className="h-16 bg-[#165834] flex items-center justify-center">
                      <span className="text-xs font-mono text-white">#165834</span>
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-normal text-[#1A1A1A]">Emerald Olive</h4>
                      <p className="text-[10px] text-gray-500 font-sans">Success badges, free shipping, checkmarks</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Floating Toast Notification Stack in Playground */}
        <div className="fixed bottom-6 right-6 z-60 space-y-3 max-w-sm w-full pointer-events-none">
          {toasts.map(toast => (
            <div key={toast.id} className="pointer-events-auto">
              <Toast
                id={toast.id}
                type={toast.type}
                title={toast.title}
                message={toast.message}
                onClose={(id) => setToasts(prev => prev.filter(t => t.id !== id))}
              />
            </div>
          ))}
        </div>

        {/* Live Confirm Dialog Instance */}
        <ConfirmDialog
          isOpen={isConfirmOpen}
          onClose={() => setIsConfirmOpen(false)}
          onConfirm={() => {
            setIsConfirmOpen(false);
            triggerToast('info', 'Action Confirmed', 'The requested atelier operation was executed.');
          }}
          title={confirmVariant === 'danger' ? 'Archive Bespoke Silhouette?' : 'Confirm Custom Measurements?'}
          description={
            confirmVariant === 'danger'
              ? 'This action will remove the customized pattern from your private vault. This cannot be undone.'
              : 'Our master seamstresses in Paris will begin cutting the Mulberry silk fabric based on your provided parameters.'
          }
          variant={confirmVariant}
          confirmLabel={confirmVariant === 'danger' ? 'Archive Silhouette' : 'Authorize Tailoring'}
          icon={confirmVariant === 'danger' ? 'danger' : 'warning'}
        />

        {/* Live Alert Dialog Instance */}
        <AlertDialog
          isOpen={isAlertOpen}
          onClose={() => setIsAlertOpen(false)}
          type={alertType}
          title={
            alertType === 'success'
              ? 'Bespoke Order Sent to Paris'
              : alertType === 'warning'
              ? 'Limited Silk Allocation Notice'
              : 'Security Authentication Required'
          }
          message={
            alertType === 'success'
              ? 'Your bespoke order has been registered at our 8th arrondissement workshop. A tracking voucher has been sent to your email.'
              : alertType === 'warning'
              ? 'Only 2 made-to-order slots remain for this couture season due to hand-pleating production limits.'
              : 'Please re-verify your 256-bit encryption key before authorizing this high-value atelier transaction.'
          }
          buttonText="Acknowledge Notice"
        />

        {/* Live Custom Rich Request Modal Instance */}
        <Dialog
          isOpen={isCustomDialogOpen}
          onClose={() => setIsCustomDialogOpen(false)}
          title="Request Bespoke Fabric Swatch"
          subtitle="Maison Archive Service"
          size="md"
          footer={
            <>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsCustomDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                size="sm"
                isLoading={isDialogLoading}
                onClick={() => {
                  setIsDialogLoading(true);
                  setTimeout(() => {
                    setIsDialogLoading(false);
                    setIsCustomDialogOpen(false);
                    triggerToast('success', 'Swatch Request Registered', 'Complimentary Como silk swatches dispatched via priority post.');
                  }, 1200);
                }}
              >
                Dispatch Swatch Package
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <p className="text-xs text-gray-600">
              Receive a curated envelope of hand-cut Como silk swatches, faille textures, and color ribbons to examine under natural daylight.
            </p>
            <Input
              label="Recipient Name"
              placeholder="e.g. Eleanor Vance"
              defaultValue="Eleanor Vance"
            />
            <Textarea
              label="Bespoke Color / Texture Notes"
              placeholder="Specify shades (e.g., Midnight Noir, Champagne Pearl, Emerald)..."
              defaultValue="Interested in comparing heavy 40mm silk charmeuse vs matte silk crepe in Ivory."
            />
            <Checkbox
              checked={true}
              onChange={() => {}}
              label="Include Embossed Atelier Lookbook & Measurement Tape"
            />
          </div>
        </Dialog>
      </div>
    </div>
  );
};
