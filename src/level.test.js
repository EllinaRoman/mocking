import fetchData from './http';
import { getLevel } from './level';

jest.mock('./http');

test('возвращает уровень если статус ok', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 5 });
  expect(getLevel(1)).toBe('Ваш текущий уровень: 5');
});

test('статус не ok', () => {
  fetchData.mockReturnValue({ status: 'error', level: 5 });
  expect(getLevel(1)).toBe(`Информация об уровне временно недоступна`);
});