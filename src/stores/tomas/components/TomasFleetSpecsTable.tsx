import React from 'react';
import { X, Layers, Check, Download, Zap } from 'lucide-react';
import { TOMAS_FLEET } from '../data';
import { MachineryItem } from '../types';

interface TomasFleetSpecsTableProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMachinery: (machinery: MachineryItem) => void;
}

export const TomasFleetSpecsTable: React.FC<TomasFleetSpecsTableProps> = ({
  isOpen,
  onClose,
  onSelectMachinery
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-2 sm:p-6 overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div
        className="relative bg-[#14171E] w-full max-w-6xl border border-[#2F3542] my-auto max-h-[90vh] overflow-y-auto p-6 text-gray-100 font-mono shadow-2xl rounded-xs"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#252932]">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#F59E0B]" />
            <div>
              <h3 className="text-base font-bold text-white uppercase">
                Fleet Engineering Specification Matrix
              </h3>
              <p className="text-xs text-gray-400 font-mono">
                Comparative technical parameters across active rental fleet
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-[#1C2028] hover:bg-[#F59E0B] hover:text-black transition-colors rounded-xs"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Responsive Table */}
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-[#0F1115] border-b border-[#252932] text-[#F59E0B] uppercase">
                <th className="p-3">Model</th>
                <th className="p-3">Category</th>
                <th className="p-3">Operating Weight</th>
                <th className="p-3">Net Engine Power</th>
                <th className="p-3">Hydraulic Flow</th>
                <th className="p-3">Emissions Tier</th>
                <th className="p-3">Daily Hire</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#252932]">
              {TOMAS_FLEET.map((m) => (
                <tr key={m.id} className="hover:bg-[#1A1E26] transition-colors">
                  <td className="p-3 font-bold text-white whitespace-nowrap">
                    <div>{m.modelCode}</div>
                    <span className="text-[10px] text-gray-400 font-normal">{m.manufacturer}</span>
                  </td>
                  <td className="p-3 text-gray-300">{m.category}</td>
                  <td className="p-3 text-gray-200">{m.specs.operatingWeight.split('(')[0]}</td>
                  <td className="p-3 text-gray-200">{m.specs.enginePower.split('@')[0]}</td>
                  <td className="p-3 text-gray-200">{m.specs.hydraulicFlow}</td>
                  <td className="p-3 text-emerald-400 text-[10px]">{m.telematics.emissionStandard.split('/')[0]}</td>
                  <td className="p-3 font-bold text-[#F59E0B]">${m.dailyRate} / Day</td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => {
                        onSelectMachinery(m);
                        onClose();
                      }}
                      className="px-3 py-1.5 bg-[#252932] hover:bg-[#F59E0B] hover:text-black text-white font-bold text-[10px] uppercase rounded-xs transition-colors"
                    >
                      Configure Hire
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
