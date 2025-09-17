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
  Percent,
  Gift,
  Megaphone,
  Image as ImageIcon,
  Mail,
  Bell,
  Calendar,
  Target,
  TrendingUp,
  Users,
  Clock
} from 'lucide-react';

const coupons = [
  {
    id: 1,
    code: 'WELCOME20',
    type: 'percentage',
    value: 20,
    minOrder: 50,
    maxDiscount: 100,
    usage: 245,
    limit: 1000,
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    status: 'active'
  },
  {
    id: 2,
    code: 'FREESHIP',
    type: 'free_shipping',
    value: 0,
    minOrder: 25,
    maxDiscount: null,
    usage: 156,
    limit: 500,
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    status: 'active'
  },
  {
    id: 3,
    code: 'FLASH50',
    type: 'fixed',
    value: 50,
    minOrder: 200,
    maxDiscount: null,
    usage: 89,
    limit: 200,
    startDate: '2024-01-10',
    endDate: '2024-01-31',
    status: 'expired'
  }
];

const flashSales = [
  {
    id: 1,
    name: 'Weekend Flash Sale',
    discount: 30,
    products: 25,
    startDate: '2024-01-20',
    endDate: '2024-01-22',
    status: 'active',
    sales: 1250
  },
  {
    id: 2,
    name: 'Electronics Clearance',
    discount: 40,
    products: 15,
    startDate: '2024-01-25',
    endDate: '2024-01-28',
    status: 'scheduled',
    sales: 0
  }
];

const banners = [
  {
    id: 1,
    title: 'New Year Sale',
    position: 'homepage_hero',
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=300&h=150&fit=crop',
    link: '/sale',
    status: 'active',
    clicks: 1250,
    impressions: 5000
  },
  {
    id: 2,
    title: 'Free Shipping',
    position: 'header_bar',
    image: null,
    link: '/shipping',
    status: 'active',
    clicks: 890,
    impressions: 3500
  }
];

const campaigns = [
  {
    id: 1,
    name: 'Welcome Series',
    type: 'email',
    recipients: 2500,
    sent: 2500,
    opened: 1200,
    clicked: 450,
    status: 'completed',
    date: '2024-01-15'
  },
  {
    id: 2,
    name: 'Flash Sale Alert',
    type: 'push',
    recipients: 5000,
    sent: 4800,
    opened: 2400,
    clicked: 720,
    status: 'active',
    date: '2024-01-20'
  }
];

export function Marketing() {
  const [isAddCouponOpen, setIsAddCouponOpen] = useState(false);
  const [isAddSaleOpen, setIsAddSaleOpen] = useState(false);
  const [isAddBannerOpen, setIsAddBannerOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Marketing & Promotions</h1>
        <p className="text-muted-foreground">Manage coupons, sales, banners and campaigns</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
            <Megaphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">4 email, 8 push notifications</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Coupon Usage</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">490</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Email Open Rate</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48%</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Push CTR</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15%</div>
            <p className="text-xs text-muted-foreground">+2% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="coupons" className="space-y-4">
        <TabsList>
          <TabsTrigger value="coupons">Coupons</TabsTrigger>
          <TabsTrigger value="flash-sales">Flash Sales</TabsTrigger>
          <TabsTrigger value="banners">Banners</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
        </TabsList>

        <TabsContent value="coupons">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Coupon Management</CardTitle>
              <Dialog open={isAddCouponOpen} onOpenChange={setIsAddCouponOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Coupon
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Coupon</DialogTitle>
                    <DialogDescription>
                      Create a new discount coupon for your customers.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div>
                      <Label htmlFor="coupon-code">Coupon Code</Label>
                      <Input id="coupon-code" placeholder="e.g., SAVE20" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="discount-type">Discount Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="percentage">Percentage</SelectItem>
                            <SelectItem value="fixed">Fixed Amount</SelectItem>
                            <SelectItem value="free_shipping">Free Shipping</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="discount-value">Discount Value</Label>
                        <Input id="discount-value" type="number" placeholder="20" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="min-order">Minimum Order ($)</Label>
                        <Input id="min-order" type="number" placeholder="50" />
                      </div>
                      <div>
                        <Label htmlFor="usage-limit">Usage Limit</Label>
                        <Input id="usage-limit" type="number" placeholder="1000" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="start-date">Start Date</Label>
                        <Input id="start-date" type="date" />
                      </div>
                      <div>
                        <Label htmlFor="end-date">End Date</Label>
                        <Input id="end-date" type="date" />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => setIsAddCouponOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setIsAddCouponOpen(false)}>
                        Create Coupon
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
                    <TableHead>Code</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Usage</TableHead>
                    <TableHead>Valid Until</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {coupons.map((coupon) => (
                    <TableRow key={coupon.id}>
                      <TableCell className="font-mono">{coupon.code}</TableCell>
                      <TableCell>
                        {coupon.type === 'percentage' && <Badge variant="outline">Percentage</Badge>}
                        {coupon.type === 'fixed' && <Badge variant="outline">Fixed</Badge>}
                        {coupon.type === 'free_shipping' && <Badge variant="outline">Free Shipping</Badge>}
                      </TableCell>
                      <TableCell>
                        {coupon.type === 'percentage' && `${coupon.value}%`}
                        {coupon.type === 'fixed' && `$${coupon.value}`}
                        {coupon.type === 'free_shipping' && 'Free Shipping'}
                      </TableCell>
                      <TableCell>{coupon.usage}/{coupon.limit}</TableCell>
                      <TableCell>{coupon.endDate}</TableCell>
                      <TableCell>
                        <Badge variant={coupon.status === 'active' ? 'default' : 'destructive'}>
                          {coupon.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
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

        <TabsContent value="flash-sales">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Flash Sales</CardTitle>
              <Dialog open={isAddSaleOpen} onOpenChange={setIsAddSaleOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Flash Sale
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create Flash Sale</DialogTitle>
                    <DialogDescription>
                      Create a limited-time flash sale with discounted products.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div>
                      <Label htmlFor="sale-name">Sale Name</Label>
                      <Input id="sale-name" placeholder="e.g., Weekend Flash Sale" />
                    </div>
                    <div>
                      <Label htmlFor="sale-discount">Discount Percentage</Label>
                      <Input id="sale-discount" type="number" placeholder="30" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="sale-start">Start Date & Time</Label>
                        <Input id="sale-start" type="datetime-local" />
                      </div>
                      <div>
                        <Label htmlFor="sale-end">End Date & Time</Label>
                        <Input id="sale-end" type="datetime-local" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="sale-products">Select Products</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose products" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Products</SelectItem>
                          <SelectItem value="category">By Category</SelectItem>
                          <SelectItem value="specific">Specific Products</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => setIsAddSaleOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setIsAddSaleOpen(false)}>
                        Create Sale
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
                    <TableHead>Sale Name</TableHead>
                    <TableHead>Discount</TableHead>
                    <TableHead>Products</TableHead>
                    <TableHead>Period</TableHead>
                    <TableHead>Sales</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {flashSales.map((sale) => (
                    <TableRow key={sale.id}>
                      <TableCell className="font-medium">{sale.name}</TableCell>
                      <TableCell>{sale.discount}%</TableCell>
                      <TableCell>{sale.products} products</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p>{sale.startDate} - {sale.endDate}</p>
                        </div>
                      </TableCell>
                      <TableCell>${sale.sales}</TableCell>
                      <TableCell>
                        <Badge variant={
                          sale.status === 'active' ? 'default' :
                          sale.status === 'scheduled' ? 'secondary' : 'destructive'
                        }>
                          {sale.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
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

        <TabsContent value="banners">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Banner Management</CardTitle>
              <Dialog open={isAddBannerOpen} onOpenChange={setIsAddBannerOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Banner
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Banner</DialogTitle>
                    <DialogDescription>
                      Create a promotional banner for your website.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div>
                      <Label htmlFor="banner-title">Banner Title</Label>
                      <Input id="banner-title" placeholder="e.g., Summer Sale" />
                    </div>
                    <div>
                      <Label htmlFor="banner-position">Position</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="homepage_hero">Homepage Hero</SelectItem>
                          <SelectItem value="header_bar">Header Bar</SelectItem>
                          <SelectItem value="sidebar">Sidebar</SelectItem>
                          <SelectItem value="footer">Footer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="banner-image">Banner Image</Label>
                      <Input id="banner-image" type="file" accept="image/*" />
                    </div>
                    <div>
                      <Label htmlFor="banner-link">Link URL</Label>
                      <Input id="banner-link" placeholder="https://example.com/sale" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="banner-active" />
                      <Label htmlFor="banner-active">Active</Label>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => setIsAddBannerOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setIsAddBannerOpen(false)}>
                        Add Banner
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
                    <TableHead>Banner</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Clicks</TableHead>
                    <TableHead>Impressions</TableHead>
                    <TableHead>CTR</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {banners.map((banner) => (
                    <TableRow key={banner.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          {banner.image && (
                            <img
                              src={banner.image}
                              alt={banner.title}
                              className="w-16 h-8 object-cover rounded"
                            />
                          )}
                          <div>
                            <p className="font-medium">{banner.title}</p>
                            <p className="text-sm text-muted-foreground">{banner.link}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{banner.position.replace('_', ' ')}</TableCell>
                      <TableCell>{banner.clicks.toLocaleString()}</TableCell>
                      <TableCell>{banner.impressions.toLocaleString()}</TableCell>
                      <TableCell>{((banner.clicks / banner.impressions) * 100).toFixed(1)}%</TableCell>
                      <TableCell>
                        <Badge variant={banner.status === 'active' ? 'default' : 'secondary'}>
                          {banner.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
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

        <TabsContent value="campaigns">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Marketing Campaigns</CardTitle>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create Campaign
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Campaign</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Recipients</TableHead>
                    <TableHead>Sent</TableHead>
                    <TableHead>Opened</TableHead>
                    <TableHead>Clicked</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {campaigns.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{campaign.name}</p>
                          <p className="text-sm text-muted-foreground">{campaign.date}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {campaign.type === 'email' ? <Mail className="w-3 h-3 mr-1" /> : <Bell className="w-3 h-3 mr-1" />}
                          {campaign.type}
                        </Badge>
                      </TableCell>
                      <TableCell>{campaign.recipients.toLocaleString()}</TableCell>
                      <TableCell>{campaign.sent.toLocaleString()}</TableCell>
                      <TableCell>
                        <div>
                          <p>{campaign.opened.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">
                            {((campaign.opened / campaign.sent) * 100).toFixed(1)}%
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p>{campaign.clicked.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">
                            {((campaign.clicked / campaign.opened) * 100).toFixed(1)}%
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={campaign.status === 'active' ? 'default' : 'secondary'}>
                          {campaign.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
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
      </Tabs>
    </div>
  );
}