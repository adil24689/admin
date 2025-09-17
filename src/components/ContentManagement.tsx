import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from './ui/dialog';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  FileText,
  Globe,
  Image as ImageIcon,
  Calendar,
  User,
  Search,
  Settings
} from 'lucide-react';

const pages = [
  {
    id: 1,
    title: 'About Us',
    slug: 'about-us',
    status: 'published',
    lastModified: '2024-01-15',
    author: 'Admin',
    views: 1250
  },
  {
    id: 2,
    title: 'Contact Us',
    slug: 'contact-us',
    status: 'published',
    lastModified: '2024-01-10',
    author: 'Admin',
    views: 890
  },
  {
    id: 3,
    title: 'Privacy Policy',
    slug: 'privacy-policy',
    status: 'published',
    lastModified: '2024-01-08',
    author: 'Admin',
    views: 456
  },
  {
    id: 4,
    title: 'Terms & Conditions',
    slug: 'terms-conditions',
    status: 'published',
    lastModified: '2024-01-08',
    author: 'Admin',
    views: 342
  },
  {
    id: 5,
    title: 'FAQ',
    slug: 'faq',
    status: 'draft',
    lastModified: '2024-01-12',
    author: 'Admin',
    views: 0
  }
];

const blogPosts = [
  {
    id: 1,
    title: '10 Tips for Better Shopping Experience',
    slug: '10-tips-better-shopping',
    category: 'Shopping Tips',
    status: 'published',
    publishDate: '2024-01-15',
    author: 'John Doe',
    views: 2500,
    comments: 23,
    featured: true
  },
  {
    id: 2,
    title: 'New Product Launch: iPhone 15 Pro',
    slug: 'iphone-15-pro-launch',
    category: 'Product News',
    status: 'published',
    publishDate: '2024-01-12',
    author: 'Jane Smith',
    views: 5400,
    comments: 87,
    featured: true
  },
  {
    id: 3,
    title: 'How to Choose the Right Laptop',
    slug: 'choose-right-laptop',
    category: 'Buying Guide',
    status: 'draft',
    publishDate: null,
    author: 'Bob Johnson',
    views: 0,
    comments: 0,
    featured: false
  }
];

const homepageSections = [
  {
    id: 1,
    name: 'Hero Banner',
    type: 'banner',
    position: 1,
    visible: true,
    content: 'New Year Sale - Up to 50% Off'
  },
  {
    id: 2,
    name: 'Featured Products',
    type: 'products',
    position: 2,
    visible: true,
    content: '8 products selected'
  },
  {
    id: 3,
    name: 'Categories Grid',
    type: 'categories',
    position: 3,
    visible: true,
    content: '6 categories displayed'
  },
  {
    id: 4,
    name: 'Newsletter Signup',
    type: 'newsletter',
    position: 4,
    visible: false,
    content: 'Subscribe to our newsletter'
  }
];

export function ContentManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddPageOpen, setIsAddPageOpen] = useState(false);
  const [isAddPostOpen, setIsAddPostOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Content Management</h1>
        <p className="text-muted-foreground">Manage pages, blog posts, and homepage content</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pages</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">10 published, 2 drafts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">38 published, 7 drafts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.5K</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blog Comments</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">324</div>
            <p className="text-xs text-muted-foreground">45 pending approval</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pages" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pages">Pages</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
          <TabsTrigger value="homepage">Homepage</TabsTrigger>
        </TabsList>

        <TabsContent value="pages">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Page Management</CardTitle>
              <Dialog open={isAddPageOpen} onOpenChange={setIsAddPageOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Page
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Create New Page</DialogTitle>
                    <DialogDescription>
                      Create a new static page for your website.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div>
                      <Label htmlFor="page-title">Page Title</Label>
                      <Input id="page-title" placeholder="e.g., About Us" />
                    </div>
                    <div>
                      <Label htmlFor="page-slug">URL Slug</Label>
                      <Input id="page-slug" placeholder="about-us" />
                    </div>
                    <div>
                      <Label htmlFor="page-content">Page Content</Label>
                      <Textarea 
                        id="page-content" 
                        placeholder="Enter page content..."
                        className="min-h-[200px]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="meta-title">Meta Title (SEO)</Label>
                      <Input id="meta-title" placeholder="SEO optimized title" />
                    </div>
                    <div>
                      <Label htmlFor="meta-description">Meta Description (SEO)</Label>
                      <Textarea id="meta-description" placeholder="SEO description..." />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="page-published" />
                      <Label htmlFor="page-published">Publish immediately</Label>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => setIsAddPageOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setIsAddPageOpen(false)}>
                        Create Page
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search pages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Slug</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Modified</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pages.map((page) => (
                    <TableRow key={page.id}>
                      <TableCell className="font-medium">{page.title}</TableCell>
                      <TableCell className="font-mono text-sm">/{page.slug}</TableCell>
                      <TableCell>
                        <Badge variant={page.status === 'published' ? 'default' : 'secondary'}>
                          {page.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{page.lastModified}</TableCell>
                      <TableCell>{page.author}</TableCell>
                      <TableCell>{page.views.toLocaleString()}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blog">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Blog Management</CardTitle>
              <Dialog open={isAddPostOpen} onOpenChange={setIsAddPostOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    New Post
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Create New Blog Post</DialogTitle>
                    <DialogDescription>
                      Create a new blog post for your website.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div>
                      <Label htmlFor="post-title">Post Title</Label>
                      <Input id="post-title" placeholder="e.g., 10 Tips for Better Shopping" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="post-slug">URL Slug</Label>
                        <Input id="post-slug" placeholder="10-tips-better-shopping" />
                      </div>
                      <div>
                        <Label htmlFor="post-category">Category</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="shopping-tips">Shopping Tips</SelectItem>
                            <SelectItem value="product-news">Product News</SelectItem>
                            <SelectItem value="buying-guide">Buying Guide</SelectItem>
                            <SelectItem value="reviews">Reviews</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="post-excerpt">Excerpt</Label>
                      <Textarea id="post-excerpt" placeholder="Brief summary of the post..." />
                    </div>
                    <div>
                      <Label htmlFor="post-content">Post Content</Label>
                      <Textarea 
                        id="post-content" 
                        placeholder="Write your blog post content here..."
                        className="min-h-[300px]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="featured-image">Featured Image</Label>
                      <Input id="featured-image" type="file" accept="image/*" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="post-meta-title">Meta Title (SEO)</Label>
                        <Input id="post-meta-title" placeholder="SEO optimized title" />
                      </div>
                      <div>
                        <Label htmlFor="post-tags">Tags (comma separated)</Label>
                        <Input id="post-tags" placeholder="shopping, tips, ecommerce" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="post-meta-description">Meta Description (SEO)</Label>
                      <Textarea id="post-meta-description" placeholder="SEO description..." />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Switch id="post-featured" />
                        <Label htmlFor="post-featured">Featured post</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="post-published" />
                        <Label htmlFor="post-published">Publish immediately</Label>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => setIsAddPostOpen(false)}>
                        Save Draft
                      </Button>
                      <Button onClick={() => setIsAddPostOpen(false)}>
                        Publish Post
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Publish Date</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Comments</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {post.featured && (
                            <Badge variant="outline" className="text-xs">Featured</Badge>
                          )}
                          <span className="font-medium">{post.title}</span>
                        </div>
                      </TableCell>
                      <TableCell>{post.category}</TableCell>
                      <TableCell>
                        <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                          {post.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{post.publishDate || '-'}</TableCell>
                      <TableCell>{post.author}</TableCell>
                      <TableCell>{post.views.toLocaleString()}</TableCell>
                      <TableCell>{post.comments}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="homepage">
          <Card>
            <CardHeader>
              <CardTitle>Homepage Sections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {homepageSections.map((section) => (
                  <div key={section.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Settings className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{section.name}</span>
                      </div>
                      <Badge variant="outline">{section.type}</Badge>
                      <span className="text-sm text-muted-foreground">Position: {section.position}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">{section.content}</span>
                      <Switch 
                        checked={section.visible}
                        aria-label={`Toggle ${section.name} visibility`}
                      />
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}