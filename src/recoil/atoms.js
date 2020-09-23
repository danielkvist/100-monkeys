import { atom } from 'recoil';

const counterState = atom({
	key: 'counterState',
	default: 1,
});

const writingState = atom({
	key: 'writingState',
	default: false,
});

export { counterState, writingState };
