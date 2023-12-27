import { AtomEffect } from 'recoil';
import { RecoilKeys } from './RecoilKeys';

export const localStorageEffect = <T>(key: RecoilKeys): AtomEffect<T> => ({ setSelf, onSet }) => {
  // ブラウザ環境でのみ実行
  if (typeof window === 'undefined') {
    return;
  }

  // ローカルストレージから値を読み込む
  const savedValue = localStorage.getItem(key);
  if (savedValue != null) {
    try {
      setSelf(JSON.parse(savedValue) as T);
    } catch (e) {
      console.error(`Error reading localStorage key “${key}”:`, e);
    }
  }

  // 値の変更を監視し、ローカルストレージに保存
  onSet((newValue, _, isReset) => {
    if (isReset) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  });
};
