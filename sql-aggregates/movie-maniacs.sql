select
  "customers"."firstName",
  "customers"."lastName",

  sum("payments"."amount") as "totalRate"
from "customers"
  join "payments" using ("customerId")
  join "rentals" using ("rentalId")
  join  "inventory" using ("inventoryId")
  join "films" using ("filmId")

group by
  "customers"."firstName",
  "customers"."lastName"

order by "totalRate" DESC;
