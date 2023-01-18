export default interface User {
  uid: string;
  nickname: string;
  type: 'ADMIN' | 'USER' | 'BLOCK' | 'DORMANT' | 'DEACTIVATED';
  hasCharacter: boolean;
}
