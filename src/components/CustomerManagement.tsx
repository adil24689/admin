import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from './ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Search, 
  Eye, 
  Edit, 
  UserPlus,
  Users,
  Star,
  ShoppingBag,
  Crown,
  Mail,
  Phone,
  MapPin,
  Calendar
} from 'lucide-react';

const customers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    joinDate: '2023-01-15',
    totalOrders: 12,
    totalSpent: 1250.00,
    avgOrderValue: 104.17,
    group: 'VIP',
    status: 'active',
    location: 'New York, NY'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1 (555) 234-5678',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop',
    joinDate: '2023-03-22',
    totalOrders: 8,
    totalSpent: 675.50,
    avgOrderValue: 84.44,
    group: 'Regular',
    status: 'active',
    location: 'Los Angeles, CA'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    phone: '+1 (555) 345-6789',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    joinDate: '2023-06-10',
    totalOrders: 25,
    totalSpent: 3200.00,
    avgOrderValue: 128.00,
    group: 'Wholesale',
    status: 'active',
    location: 'Chicago, IL'
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice@example.com',
    phone: '+1 (555) 456-7890',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    joinDate: '2023-09-05',
    totalOrders: 3,
    totalSpent: 189.99,
    avgOrderValue: 63.33,
    group: 'Regular',
    status: 'inactive',
    location: 'Miami, FL'
  },
  {
    id: 5,
    name: 'Charlie Wilson',
    email: 'charlie@example.com',
    phone: '+1 (555) 567-8901',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    joinDate: '2023-11-20',
    totalOrders: 15,
    totalSpent: 1875.00,
    avgOrderValue: 125.00,
    group: 'VIP',
    status: 'active',
    location: 'Seattle, WA'
  }
];

const recentOrders = [
  { id: '#12345', date: '2024-01-15', amount: 125.00, status: 'completed' },
  { id: '#12340', date: '2024-01-10', amount: 89.99, status: 'completed' },
  { id: '#12335', date: '2024-01-05', amount: 200.00, status: 'shipped' },
  { id: '#12330', date: '2023-12-28', amount: 45.50, status: 'completed' },
];

const reviews = [
  { product: 'iPhone 15 Pro', rating: 5, comment: 'Excellent product, fast delivery!', date: '2024-01-12' },
  { product: 'MacBook Air M3', rating: 4, comment: 'Great performance, a bit pricey.', date: '2024-01-08' },
  { product: 'AirPods Pro', rating: 5, comment: 'Perfect sound quality!', date: '2024-01-03' },
];

export function CustomerManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getGroupBadge = (group: string) => {
    const variants = {
      VIP: 'default',
      Wholesale: 'secondary',
      Regular: 'outline'
    } as const;
    
    const colors = {
      VIP: 'text-yellow-600',
      Wholesale: 'text-blue-600',
      Regular: 'text-gray-600'
    } as const;

    return (
      <Badge variant={variants[group as keyof typeof variants] || 'outline'}>
        {group === 'VIP' && <Crown className="w-3 h-3 mr-1" />}
        {group}
      </Badge>
    );
  };

  const getStatusBadge = (status: string) => {
    return (
      <Badge variant={status === 'active' ? 'default' : 'secondary'}>
        {status}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-semibold">Customer Management</h1>
          <p className="text-muted-foreground">Manage customer relationships and data</p>
        </div>
        <Button>
          <UserPlus className="w-4 h-4 mr-2" />
          Add Customer
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">VIP Customers</CardTitle>
            <Crown className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">284</div>
            <p className="text-xs text-muted-foreground">10% of total customers</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Order Value</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$98.50</div>
            <p className="text-xs text-muted-foreground">+5.2% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customer Rating</CardTitle>
            <Star className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <p className="text-xs text-muted-foreground">Based on 1,247 reviews</p>
          </CardContent>
        </Card>
      </div>

      {/* Customers Table */}
      <Card>
        <CardHeader>
          <CardTitle>Customers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Total Spent</TableHead>
                  <TableHead>Avg. Order</TableHead>
                  <TableHead>Group</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={customer.avatar} />
                          <AvatarFallback>{customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{customer.name}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {customer.location}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <p className="text-sm flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {customer.email}
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {customer.phone}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-muted-foreground" />
                        {customer.joinDate}
                      </div>
                    </TableCell>
                    <TableCell>{customer.totalOrders}</TableCell>
                    <TableCell>${customer.totalSpent.toFixed(2)}</TableCell>
                    <TableCell>${customer.avgOrderValue.toFixed(2)}</TableCell>
                    <TableCell>{getGroupBadge(customer.group)}</TableCell>
                    <TableCell>{getStatusBadge(customer.status)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" onClick={() => setSelectedCustomer(customer)}>
                              <Eye className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Customer Profile - {customer.name}</DialogTitle>
                              <DialogDescription>
                                View customer details, order history, and reviews.
                              </DialogDescription>
                            </DialogHeader>
                            <Tabs defaultValue="overview" className="mt-4">
                              <TabsList>
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="orders">Orders</TabsTrigger>
                                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                              </TabsList>
                              
                              <TabsContent value="overview" className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <Card>
                                    <CardHeader>
                                      <CardTitle className="text-lg">Customer Information</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                      <div className="flex items-center gap-3">
                                        <Avatar className="w-16 h-16">
                                          <AvatarImage src={customer.avatar} />
                                          <AvatarFallback>{customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                          <h3 className="font-semibold">{customer.name}</h3>
                                          {getGroupBadge(customer.group)}
                                        </div>
                                      </div>
                                      <div className="space-y-2 text-sm">
                                        <p className="flex items-center gap-2">
                                          <Mail className="w-4 h-4" />
                                          {customer.email}
                                        </p>
                                        <p className="flex items-center gap-2">
                                          <Phone className="w-4 h-4" />
                                          {customer.phone}
                                        </p>
                                        <p className="flex items-center gap-2">
                                          <MapPin className="w-4 h-4" />
                                          {customer.location}
                                        </p>
                                        <p className="flex items-center gap-2">
                                          <Calendar className="w-4 h-4" />
                                          Joined {customer.joinDate}
                                        </p>
                                      </div>
                                    </CardContent>
                                  </Card>

                                  <Card>
                                    <CardHeader>
                                      <CardTitle className="text-lg">Statistics</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <p className="text-sm text-muted-foreground">Total Orders</p>
                                          <p className="text-2xl font-bold">{customer.totalOrders}</p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-muted-foreground">Total Spent</p>
                                          <p className="text-2xl font-bold">${customer.totalSpent.toFixed(2)}</p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-muted-foreground">Avg. Order Value</p>
                                          <p className="text-xl font-semibold">${customer.avgOrderValue.toFixed(2)}</p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-muted-foreground">Status</p>
                                          {getStatusBadge(customer.status)}
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </div>
                              </TabsContent>

                              <TabsContent value="orders">
                                <Card>
                                  <CardHeader>
                                    <CardTitle>Recent Orders</CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <div className="space-y-3">
                                      {recentOrders.map((order, index) => (
                                        <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                          <div>
                                            <p className="font-medium">{order.id}</p>
                                            <p className="text-sm text-muted-foreground">{order.date}</p>
                                          </div>
                                          <div className="text-right">
                                            <p className="font-medium">${order.amount.toFixed(2)}</p>
                                            <Badge variant={order.status === 'completed' ? 'default' : 'secondary'}>
                                              {order.status}
                                            </Badge>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </CardContent>
                                </Card>
                              </TabsContent>

                              <TabsContent value="reviews">
                                <Card>
                                  <CardHeader>
                                    <CardTitle>Customer Reviews</CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <div className="space-y-4">
                                      {reviews.map((review, index) => (
                                        <div key={index} className="border-b pb-4 last:border-b-0">
                                          <div className="flex items-center justify-between mb-2">
                                            <p className="font-medium">{review.product}</p>
                                            <div className="flex items-center gap-1">
                                              {[...Array(5)].map((_, i) => (
                                                <Star
                                                  key={i}
                                                  className={`w-4 h-4 ${
                                                    i < review.rating
                                                      ? 'fill-yellow-400 text-yellow-400'
                                                      : 'text-gray-300'
                                                  }`}
                                                />
                                              ))}
                                            </div>
                                          </div>
                                          <p className="text-sm text-muted-foreground mb-1">{review.comment}</p>
                                          <p className="text-xs text-muted-foreground">{review.date}</p>
                                        </div>
                                      ))}
                                    </div>
                                  </CardContent>
                                </Card>
                              </TabsContent>
                            </Tabs>
                          </DialogContent>
                        </Dialog>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}