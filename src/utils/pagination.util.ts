export function getPaginationOptions(pageNumber: number, pageSize: number) {
  const page = pageNumber < 1 ? 1 : pageNumber;
  const skip = (page - 1) * pageSize;
  return { skip, take: pageSize };
}
