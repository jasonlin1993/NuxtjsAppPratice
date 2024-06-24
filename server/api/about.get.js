export default defineEventHandler(() => {
  console.log('接受到 API 請求 /api/about ');

  return {
    name: 'Ryan',
    gender: '男',
    email: 'test@gmail.com',
  };
});
