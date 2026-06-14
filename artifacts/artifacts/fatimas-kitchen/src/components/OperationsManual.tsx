import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-start">
      <span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center mt-0.5">
        {n}
      </span>
      <span>{children}</span>
    </div>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="bg-muted px-1.5 py-0.5 rounded text-primary text-sm font-mono">
      {children}
    </code>
  );
}

export default function OperationsManual() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="border-border hover:bg-secondary gap-2 text-muted-foreground"
          data-testid="button-operations-manual"
        >
          <FileText className="w-4 h-4" />
          Operations Manual
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-background border-t border-border max-h-[90vh]">
        <div className="mx-auto w-full max-w-3xl">
          <DrawerHeader>
            <DrawerTitle className="font-serif text-2xl text-primary">
              Fatima's Kitchen — Operations Manual
            </DrawerTitle>
            <DrawerDescription>
              System documentation, maintenance guide, and deployment instructions
            </DrawerDescription>
          </DrawerHeader>

          <ScrollArea className="h-[60vh] px-4">
            <Accordion type="single" collapsible className="w-full space-y-1 pb-6">

              <AccordionItem value="github">
                <AccordionTrigger className="text-left font-semibold">
                  Step 1 — Push Code to GitHub
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                  <p>Follow these steps to upload your Replit project to GitHub:</p>
                  <div className="space-y-2.5">
                    <Step n={1}>
                      Go to <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">github.com</a> and sign in (or create a free account).
                    </Step>
                    <Step n={2}>
                      Click the <strong className="text-foreground">+</strong> icon (top right) → <strong className="text-foreground">New repository</strong>.
                    </Step>
                    <Step n={3}>
                      Name it <Code>fatimas-kitchen</Code>, set it to <strong className="text-foreground">Public</strong>, do NOT add README/gitignore, then click <strong className="text-foreground">Create repository</strong>.
                    </Step>
                    <Step n={4}>
                      In Replit, open the <strong className="text-foreground">Shell</strong> tab (bottom panel) and run these commands one by one:
                      <pre className="bg-card border border-border rounded-lg p-3 mt-2 text-xs font-mono text-foreground overflow-x-auto whitespace-pre">
{`git init
git add .
git commit -m "Initial commit — Fatima's Kitchen website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/fatimas-kitchen.git
git push -u origin main`}
                      </pre>
                      <p className="text-xs mt-1">Replace <Code>YOUR-USERNAME</Code> with your actual GitHub username.</p>
                    </Step>
                    <Step n={5}>
                      GitHub will ask for your username and password. Use your GitHub username and a <strong className="text-foreground">Personal Access Token</strong> (not your password). Create one at: github.com → Settings → Developer settings → Personal access tokens → Generate new token (select <strong>repo</strong> scope).
                    </Step>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="netlify">
                <AccordionTrigger className="text-left font-semibold">
                  Step 2 — Deploy to Netlify
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                  <p>Once your code is on GitHub, deploy to Netlify in minutes:</p>
                  <div className="space-y-2.5">
                    <Step n={1}>
                      Go to <a href="https://netlify.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">netlify.com</a> and sign in with GitHub.
                    </Step>
                    <Step n={2}>
                      Click <strong className="text-foreground">Add new site</strong> → <strong className="text-foreground">Import an existing project</strong> → choose <strong className="text-foreground">GitHub</strong>.
                    </Step>
                    <Step n={3}>
                      Select your <Code>fatimas-kitchen</Code> repository.
                    </Step>
                    <Step n={4}>
                      Netlify will auto-detect the <Code>netlify.toml</Code> file. Verify these settings:
                      <div className="bg-card border border-border rounded-lg p-3 mt-2 space-y-1 text-xs font-mono text-foreground">
                        <div><span className="text-muted-foreground">Base directory:</span> <span className="text-primary">.</span></div>
                        <div><span className="text-muted-foreground">Build command:</span> <span className="text-primary">pnpm install && pnpm --filter @workspace/fatimas-kitchen run build</span></div>
                        <div><span className="text-muted-foreground">Publish directory:</span> <span className="text-primary">artifacts/fatimas-kitchen/dist/public</span></div>
                      </div>
                    </Step>
                    <Step n={5}>
                      Click <strong className="text-foreground">Deploy site</strong>. Netlify will build and publish — takes about 2 minutes.
                    </Step>
                    <Step n={6}>
                      After deploy, go to <strong className="text-foreground">Site settings → Environment variables</strong> and add:
                      <div className="bg-card border border-border rounded-lg p-3 mt-2 space-y-1 text-xs font-mono text-foreground">
                        <div><span className="text-primary">PORT</span> = <span>3000</span></div>
                        <div><span className="text-primary">BASE_PATH</span> = <span>/</span></div>
                        <div><span className="text-primary">NODE_ENV</span> = <span>production</span></div>
                      </div>
                    </Step>
                    <Step n={7}>
                      To use your custom domain <Code>www.fatimakitchen.com</Code>: go to <strong className="text-foreground">Domain settings</strong> → <strong className="text-foreground">Add custom domain</strong> → follow the DNS instructions.
                    </Step>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-sm">
                    <strong className="text-primary">Auto-deploy:</strong> After this setup, every time you push new code to GitHub, Netlify will automatically rebuild and update the live site.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="payments">
                <AccordionTrigger className="text-left font-semibold">
                  Payment Methods (JazzCash / EasyPaisa)
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                  <p>The cart now supports 3 payment methods: Cash on Delivery, JazzCash, and EasyPaisa.</p>
                  <p>To update the account numbers, open <Code>src/pages/Cart.tsx</Code> and find the <Code>PAYMENT_OPTIONS</Code> array. Update the <Code>number</Code> field for JazzCash and EasyPaisa:</p>
                  <pre className="bg-card border border-border rounded-lg p-3 text-xs font-mono text-foreground overflow-x-auto">
{`{
  id: "jazzcash",
  label: "JazzCash",
  number: "0307-5161533", // Change this
},
{
  id: "easypaisa",
  label: "EasyPaisa",
  number: "0307-5161533", // Change this if different
}`}
                  </pre>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="menu">
                <AccordionTrigger className="text-left font-semibold">
                  Menu and Pricing Edits
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-2">
                  <p>All menu data lives in <Code>src/data/menu.ts</Code> in the <Code>MENU_ITEMS</Code> array. To change a price, find the item by its <Code>id</Code> and update the <Code>price</Code> field:</p>
                  <pre className="bg-card border border-border rounded-lg p-3 text-xs font-mono text-foreground mt-2 overflow-x-auto">
{`{ 
  id: 'r1', 
  name: 'Paratha', 
  price: 75,  // Update this number
  category: 'paratha',
  imageKey: 'paratha'
}`}
                  </pre>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="whatsapp">
                <AccordionTrigger className="text-left font-semibold">
                  Contact and WhatsApp Settings
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p>If the phone number changes, search the entire codebase for <Code>923075161533</Code> and update every match. The number appears in:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Navigation.tsx (WhatsApp CTA button)</li>
                    <li>Cart.tsx (checkout WhatsApp link)</li>
                    <li>ChatBot.tsx (bot response)</li>
                    <li>About.tsx (contact section)</li>
                    <li>Footer.tsx (footer links)</li>
                    <li>index.html (JSON-LD schema)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="images">
                <AccordionTrigger className="text-left font-semibold">
                  Updating Food Images
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-2">
                  <p>Food images are imported in <Code>src/data/menu.ts</Code> in the <Code>IMAGE_MAP</Code> object. To replace an image:</p>
                  <div className="space-y-2">
                    <Step n={1}>Upload your new image to the <Code>attached_assets/generated_images/</Code> folder.</Step>
                    <Step n={2}>Add a new import line at the top of <Code>menu.ts</Code>: <Code>import myNewImg from "@assets/generated_images/my-image.png"</Code></Step>
                    <Step n={3}>Add the key to IMAGE_MAP and update the relevant menu items to use the new <Code>imageKey</Code>.</Step>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="roadmap">
                <AccordionTrigger className="text-left font-semibold">
                  Roadmap and Future Upgrades
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-foreground">Short-term:</strong> Real JazzCash/EasyPaisa API integration (requires merchant account from Jazz/Telenor).</li>
                    <li><strong className="text-foreground">Medium-term:</strong> Admin dashboard for order management, real-time order tracking for customers.</li>
                    <li><strong className="text-foreground">Long-term:</strong> Full backend (Node.js/Express + PostgreSQL) with dynamic menu via CMS, loyalty points system.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </ScrollArea>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline" className="w-full sm:w-auto mx-auto border-border">
                Close Manual
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
