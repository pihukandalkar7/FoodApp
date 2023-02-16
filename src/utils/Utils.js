export function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowercase().includes(searchText.toLowercase())
  );

  return filterData;
}
