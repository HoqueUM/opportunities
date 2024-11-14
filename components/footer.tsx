export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16 px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-yellow-500">Internships</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-yellow-500">Projects</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-yellow-500">Mentorship</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-yellow-500">Resources</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-yellow-500">About</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-yellow-500">Blog</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-yellow-500">Careers</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-yellow-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-yellow-500">Privacy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-yellow-500">Terms</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-yellow-500">Cookie Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-yellow-500">Licenses</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-yellow-500">Twitter</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-yellow-500">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-yellow-500">GitHub</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-yellow-500">Discord</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} opportunities.tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}