import React, { useState } from 'react';
import { MasterStoreBar } from './components/MasterStoreBar';
import { StoreSelectorHub } from './components/StoreSelectorHub';
import { CharleneStore } from './stores/charlene/CharleneStore';
import { TomasStore } from './stores/tomas/TomasStore';
import { JosephStore } from './stores/joseph/JosephStore';
import { ClarissaStore } from './stores/clarissa/ClarissaStore';
import { PlantitoStore } from './stores/plantito/PlantitoStore';
import { SandraStore } from './stores/sandra/SandraStore';
import { CurrencyCode } from './types';

export default function App() {
  // Active view: 'hub' | 'charlene' | 'tomas' | 'joseph' | 'clarissa' | 'plantito' | 'sandra'
  const [activeView, setActiveView] = useState<string>('hub');
  const [currency, setCurrency] = useState<CurrencyCode>('USD');

  const handleSelectView = (viewId: string) => {
    setActiveView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Universal Top Switcher Bar */}
      <MasterStoreBar
        activeView={activeView}
        onSelectView={handleSelectView}
      />

      {/* View Routing */}
      <div className="flex-1">
        {activeView === 'hub' && (
          <StoreSelectorHub
            activeStoreId={activeView}
            onSelectStore={(storeId) => handleSelectView(storeId)}
          />
        )}

        {activeView === 'charlene' && (
          <CharleneStore
            currency={currency}
            onChangeCurrency={setCurrency}
          />
        )}

        {activeView === 'tomas' && (
          <TomasStore
            currency={currency}
            onChangeCurrency={setCurrency}
          />
        )}

        {activeView === 'joseph' && (
          <JosephStore
            currency={currency}
            onChangeCurrency={setCurrency}
          />
        )}

        {activeView === 'clarissa' && (
          <ClarissaStore
            currency={currency}
            onChangeCurrency={setCurrency}
          />
        )}

        {activeView === 'plantito' && (
          <PlantitoStore
            currency={currency}
            onChangeCurrency={setCurrency}
          />
        )}

        {activeView === 'sandra' && (
          <SandraStore
            currency={currency}
            onChangeCurrency={setCurrency}
          />
        )}

        {/* Fallback to hub if another ID is chosen */}
        {activeView !== 'hub' &&
          activeView !== 'charlene' &&
          activeView !== 'tomas' &&
          activeView !== 'joseph' &&
          activeView !== 'clarissa' &&
          activeView !== 'plantito' &&
          activeView !== 'sandra' && (
            <StoreSelectorHub
              activeStoreId={activeView}
              onSelectStore={(storeId) => handleSelectView(storeId)}
            />
          )}
      </div>
    </div>
  );
}

