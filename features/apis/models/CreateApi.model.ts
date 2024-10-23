export default interface CreateApi {
  name: string;
  host: string;
  port: number;
  protocol: 'http' | 'https';
}
