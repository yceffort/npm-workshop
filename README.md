# npm 패키지 개발자를 위한 워크샵

- 여러분의 목표는 아래 두가지 npm 패키지를 만드는 것입니다.

## @yourname/secure-random

자바스크립트에서 생성할 수 있는 `Math.random`은 진짜 난수가 아닌 이른바 '유사 난수' 로 불리기 때문에 보안 관점에서 안전하지 않습니다. `window.crypto` 또는 `node:crypto`를 환경에 따라 선택하여 안전한 난수를 생성할 수 있는 패키지를 만들어주세요. 내부내야 함수는 두가지 입니다.

- `secureRandom()`: `window.crypto` 또는 `node:crypto`를 활용하여 안전한 난수를 생성해야 합니다. 어떤 경우에서든 에러가 나서는 안되고, 최후의 수단으로 `Math.random`이라도 쓰셔야 합니다.
- `insecureRandom()`: `Math.random()`을 반환하면 되며, 인수 validation은 `secureRandom`과 동일합니다.

> 두 함수 모두 option 객체를 optional 로 받으며, min, max 를 키로 받을 수 있습니다. (기본값은 각각 0, 1)
>
> ```js
> import {secureRandom} from '@yourname/secure-random'
> secureRandom() // ok, min=0, max<1
> secureRandom({max: 10}) // ok min=0 max <10
> secureRandom({min: 1, max: 100}) // ok min=0 max<100
> secureRandom({min: 100, min: 1}) // throw new InvalidParameterError(/*your message*/)

## @yourname/secure-dice

앞서 만든 `@yourname/secure-random`을 활용 (`dependencies`)하여 랜덤으로 주사위를 굴려 값을 반환하는 리액트 컴포넌트를 만들어야합니다.

- 리액트 컴포넌트여야 합니다.
- 스타일도 있어야 합니다. 스타일은 편하신 방법으로 해주세요.
- 스타일은 별도 파일로 export 되어야 합니다.

## 공통 요구 사항

- 두 패키지는 모두 npm으로 업로드 되어야 합니다.
  - 버전은 크게 신경쓰지 마세요
- `@yourname/secure-random`은 모든 서비스에서 동작할 수 있어야 합니다. 실제로 동작하는지를 확인하기 위해 코드에 각각 추가해주세요.
- `@yourname/secure-dice`는 `next` 서비스에서 모두 동작할 수 있어야 합니다.
- 개발과정 중에는 monorepo로 구성해도 되지만, 최종 산출물은 서비스에서 하위 두 패키지를 `npm`으로 직접 참조해야 합니다.
- changeset과 같은 도구는 사용하시면 안됩니다

## 추가?

- rollup 외에 vite/esbuild 로도 가능할까요?
- `@yourname/secure-random` 를 import 해도, 사용하는 함수만 import 하도록 트리쉐이킹할 수 있을까요?
- `@yourname/secure-random/browser` `@yourname/secure-name/server` 형태로 subpath 형태로도 export 할 수 있을까요?
- eslint prettier 많관부
- 클래스로 만들때와 함수로 만들때, 라이브러리를 사용하는 입장에서는 어떤차이가 있을까요?
