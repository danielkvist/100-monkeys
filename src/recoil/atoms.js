import { atom } from 'recoil';

const counterState = atom({
	key: 'counterState',
	default: 1,
});

const writingState = atom({
	key: 'writingState',
	default: false,
});

const searchState = atom({
	key: 'searchState',
	default: '',
});

export { counterState, writingState, searchState };
