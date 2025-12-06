export function createQelvaClient(baseUrl: string) {
  return {
    async health() {
      const res = await fetch(`${baseUrl}/health`);
      return res.json();
    }
  };
}
