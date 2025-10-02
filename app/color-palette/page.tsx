import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ColorPalettePage() {
  return (
    <div className="container mx-auto py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Enhanced Color Palette</h1>
        <p className="text-lg text-muted-foreground">
          Our improved color system with better contrast and consistent naming
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Light Mode Palette */}
        <div className="bg-background p-8 rounded-xl border border-border">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Light Mode Palette</h2>
          
          <div className="space-y-8">
            {/* Primary Colors */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-foreground">Primary</h3>
              <div className="flex flex-wrap gap-4">
                <ColorCard name="Primary" value="#187e89" className="bg-primary text-primary-foreground" />
                <ColorCard name="Primary Hover" value="#13656d" className="bg-[#13656d] text-white" />
                <ColorCard name="Primary Foreground" value="#ffffff" className="bg-primary-foreground text-foreground border border-border" />
              </div>
            </div>
            
            {/* Secondary Colors */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-foreground">Secondary</h3>
              <div className="flex flex-wrap gap-4">
                <ColorCard name="Secondary" value="#da5f0a" className="bg-secondary text-secondary-foreground" />
                <ColorCard name="Secondary Hover" value="#b84f08" className="bg-[#b84f08] text-white" />
                <ColorCard name="Secondary Foreground" value="#ffffff" className="bg-secondary-foreground text-foreground border border-border" />
              </div>
            </div>
            
            {/* Neutral Colors */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-foreground">Neutrals</h3>
              <div className="flex flex-wrap gap-4">
                <ColorCard name="Background" value="#ffffff" className="bg-background text-foreground border border-border" />
                <ColorCard name="Foreground" value="#353535" className="bg-foreground text-background" />
                <ColorCard name="Muted" value="#f8f8f8" className="bg-muted text-foreground border border-border" />
                <ColorCard name="Muted Foreground" value="#666666" className="bg-[#666666] text-white" />
                <ColorCard name="Accent" value="#f0f0f0" className="bg-accent text-accent-foreground border border-border" />
              </div>
            </div>
            
            {/* Status Colors */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-foreground">Status</h3>
              <div className="flex flex-wrap gap-4">
                <ColorCard name="Success" value="#2ecc71" className="bg-[#2ecc71] text-white" />
                <ColorCard name="Warning" value="#f1c40f" className="bg-[#f1c40f] text-foreground" />
                <ColorCard name="Destructive" value="#e74c3c" className="bg-destructive text-destructive-foreground" />
                <ColorCard name="Info" value="#3498db" className="bg-[#3498db] text-white" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Dark Mode Palette */}
        <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#3a3a3a]">
          <h2 className="text-2xl font-semibold mb-6 text-[#f0f0f0]">Dark Mode Palette</h2>
          
          <div className="space-y-8">
            {/* Primary Colors */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-[#f0f0f0]">Primary</h3>
              <div className="flex flex-wrap gap-4">
                <ColorCard name="Primary" value="#187e89" className="bg-primary text-primary-foreground" dark />
                <ColorCard name="Primary Hover" value="#1da1aa" className="bg-[#1da1aa] text-white" dark />
                <ColorCard name="Primary Foreground" value="#ffffff" className="bg-primary-foreground text-[#1a1a1a] border border-[#3a3a3a]" dark />
              </div>
            </div>
            
            {/* Secondary Colors */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-[#f0f0f0]">Secondary</h3>
              <div className="flex flex-wrap gap-4">
                <ColorCard name="Secondary" value="#da5f0a" className="bg-secondary text-secondary-foreground" dark />
                <ColorCard name="Secondary Hover" value="#e57329" className="bg-[#e57329] text-white" dark />
                <ColorCard name="Secondary Foreground" value="#ffffff" className="bg-secondary-foreground text-[#1a1a1a] border border-[#3a3a3a]" dark />
              </div>
            </div>
            
            {/* Neutral Colors */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-[#f0f0f0]">Neutrals</h3>
              <div className="flex flex-wrap gap-4">
                <ColorCard name="Background" value="#1a1a1a" className="bg-[#1a1a1a] text-[#f0f0f0] border border-[#3a3a3a]" dark />
                <ColorCard name="Foreground" value="#f0f0f0" className="bg-[#f0f0f0] text-[#1a1a1a]" dark />
                <ColorCard name="Muted" value="#2a2a2a" className="bg-[#2a2a2a] text-[#f0f0f0] border border-[#3a3a3a]" dark />
                <ColorCard name="Muted Foreground" value="#aaaaaa" className="bg-[#aaaaaa] text-[#1a1a1a]" dark />
                <ColorCard name="Accent" value="#333333" className="bg-[#333333] text-[#f0f0f0] border border-[#3a3a3a]" dark />
              </div>
            </div>
            
            {/* Status Colors */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-[#f0f0f0]">Status</h3>
              <div className="flex flex-wrap gap-4">
                <ColorCard name="Success" value="#2ecc71" className="bg-[#2ecc71] text-[#1a1a1a]" dark />
                <ColorCard name="Warning" value="#f1c40f" className="bg-[#f1c40f] text-[#1a1a1a]" dark />
                <ColorCard name="Destructive" value="#e74c3c" className="bg-destructive text-destructive-foreground" dark />
                <ColorCard name="Info" value="#3498db" className="bg-[#3498db] text-[#1a1a1a]" dark />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Button Examples */}
      <div className="mt-16 bg-background p-8 rounded-xl border border-border">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Button Examples</h2>
        
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="destructive">Destructive Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
        </div>
        
        <div className="mt-6 flex flex-wrap gap-4">
          <Button variant="default" disabled>Disabled Primary</Button>
          <Button variant="secondary" disabled>Disabled Secondary</Button>
          <Button variant="outline" disabled>Disabled Outline</Button>
        </div>
      </div>
      
      {/* Usage Guidelines */}
      <div className="mt-16 bg-background p-8 rounded-xl border border-border">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Usage Guidelines</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Primary Actions</h3>
            <p className="text-muted-foreground mb-4">
              Use the primary color for the most important actions on a page, such as form submissions or primary navigation.
            </p>
            <div className="flex gap-2">
              <Button variant="default">Submit</Button>
              <Button variant="default">Save</Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Secondary Actions</h3>
            <p className="text-muted-foreground mb-4">
              Use the secondary color for less important but still significant actions, such as secondary navigation or alternative options.
            </p>
            <div className="flex gap-2">
              <Button variant="secondary">Cancel</Button>
              <Button variant="secondary">Reset</Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Status Indicators</h3>
            <p className="text-muted-foreground mb-4">
              Use status colors to provide visual feedback to users about the outcome of their actions.
            </p>
            <div className="flex gap-2">
              <div className="px-3 py-2 bg-[#2ecc71] text-white rounded-md text-sm">Success</div>
              <div className="px-3 py-2 bg-[#f1c40f] text-foreground rounded-md text-sm">Warning</div>
              <div className="px-3 py-2 bg-destructive text-destructive-foreground rounded-md text-sm">Error</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground">Navigation</h3>
            <p className="text-muted-foreground mb-4">
              Use the muted and accent colors for navigation elements to create visual hierarchy without competing with primary actions.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Settings</Button>
              <Button variant="outline">Profile</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ColorCard({ name, value, className, dark = false }: { name: string; value: string; className: string; dark?: boolean }) {
  return (
    <div className={`flex flex-col items-center p-4 rounded-lg ${className} w-32`}>
      <div className="text-sm font-medium mb-1">
        {dark ? (
          <span className={name === "Background" || name === "Muted" || name === "Accent" || name === "Muted Foreground" || name === "Primary Foreground" || name === "Secondary Foreground" ? "text-[#1a1a1a]" : "text-[#f0f0f0]"}>
            {name}
          </span>
        ) : (
          <span className={name === "Background" || name === "Muted" || name === "Accent" || name === "Muted Foreground" || name === "Primary Foreground" || name === "Secondary Foreground" ? "text-foreground" : "text-background"}>
            {name}
          </span>
        )}
      </div>
      <div className={`text-xs font-mono px-2 py-1 rounded ${dark ? 'bg-[#1a1a1a] text-[#f0f0f0]' : 'bg-background text-foreground'} border ${dark ? 'border-[#3a3a3a]' : 'border-border'}`}>
        {value}
      </div>
    </div>
  )
}