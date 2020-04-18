select c.CategoryName as Category, p.ProductName, p.Price, s.SupplierName as SuppliedBy
from Products as p
inner join Categories as c 
   on p.CategoryID = c.CategoryID
inner join Suppliers as s
   on p.SupplierID = s.SupplierID