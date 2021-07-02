select
  "addresses"."line1" as "address",
  "cities"."name"  as "city",
  "addresses"."district",
  "countries"."name" as "country"
from
  "addresses",
  "cities",
  "countries"
where
  "addresses"."cityId" = "cities"."cityId"
  and
  "cities"."countryId" = "countries"."countryId"
