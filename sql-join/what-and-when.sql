select
  "films"."releaseYear",
  "categories"."name",
  "films"."title"
  from
  "films",
  "categories",
  "filmCategory"
  where
    "categories"."categoryId" = "filmCategory"."categoryId"
    and
    "films"."filmId" = "filmCategory"."filmId"
    and
    "films"."title" = 'Boogie Amelie'
