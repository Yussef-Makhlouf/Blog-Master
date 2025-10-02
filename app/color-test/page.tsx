import { Button } from "@/components/ui/button"

export default function ColorTestPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Color Palette Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Primary Color */}
        <div className="p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Primary Color</h2>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary rounded-md"></div>
            <div>
              <p className="font-medium text-foreground">#187e89</p>
              <p className="text-sm text-muted-foreground">Primary</p>
            </div>
          </div>
          <div className="mt-4">
            <Button variant="default" className="mr-2">Primary Button</Button>
            <Button variant="link" className="text-primary">Primary Link</Button>
          </div>
        </div>
        
        {/* Secondary Color */}
        <div className="p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Secondary Color</h2>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-secondary rounded-md"></div>
            <div>
              <p className="font-medium text-foreground">#da5f0a</p>
              <p className="text-sm text-muted-foreground">Secondary</p>
            </div>
          </div>
          <div className="mt-4">
            <Button variant="secondary">Secondary Button</Button>
          </div>
        </div>
        
        {/* Foreground/Third Color */}
        <div className="p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Foreground/Third Color</h2>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-foreground rounded-md"></div>
            <div>
              <p className="font-medium text-foreground">#353535</p>
              <p className="text-sm text-muted-foreground">Foreground</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-foreground">This is text in the foreground color</p>
          </div>
        </div>
        
        {/* Background Color */}
        <div className="p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Background Color</h2>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-background border border-border rounded-md"></div>
            <div>
              <p className="font-medium text-foreground">Background</p>
              <p className="text-sm text-muted-foreground">Default background</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="p-4 bg-background border border-border rounded-md">
              <p className="text-foreground">Content on background</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}