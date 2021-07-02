select
  "countries"."name",
  count(*) as "Number of Cities"
  from "countries"
    join "cities" using ("countryId")
  group by
  "countries"."name"
