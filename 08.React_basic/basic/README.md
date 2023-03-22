# 기본적인 리액트 공부 정리

### `yarn add -D eslint-config-react-app` 추가

create react App 과 yarn 충돌로 eslint 에러 발생시 수동으로 셋팅

### 상위 파일에 .yarnrc.yml

위에 eslint 수동 셋팅이후 또 다시 에러가 발생한다면 .yarnrc.yml 파일 생성 아래 내용 명시

```yml
packageExtensions:
  react-scripts@*:
    peerDependencies:
      eslint-config-react-app: "*"
```

### `yarn cache clean`

캐시에 있는 모든 내용을 삭제한 이후 `yarn install`로 셋업 후 다시 실행한다.

### Box Shadow를 시각적으로 확인하는 사이트

https://cssgenerator.org/box-shadow-css-generator.html
