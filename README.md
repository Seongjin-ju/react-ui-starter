# [@innodep/react-ui-starter](https://innodep.co.kr/renew/)

@innodep/react-ui-starter 는 React & Rollup 번들러 기반 컴포넌트 라이브러리를 제작 할 수 있는, Starter Boiler Plate 를 활용하여 제작한 테스트용 컴포넌트 라이브러리 입니다.
사내 front-end 인원들이 해당 프로젝트를 참고하여 컴포넌트 라이브러리 생성 과정에 대한 환경 구성 및 활용법에 대한 숙지가 필요 합니다.

## 🚩 Table of Contents

-   [Install](#install)
-   [Usage](#usage)

## Install

<PRE style="padding: 16px;overflow: auto;font-size: 85%;line-height: 1.45;background-color: #e2e2e2;border-radius: 3px;">
$ npm config set {private npm registry 정보}
$ npm install --save @innodep/react-ui-starter
</PRE>

## Usage

```sh
import { Text } from '@innodep/react-ui-starter';
```

#### Examples

```js
import React from "react";

import { Text } from "@innodep/react-ui-starter";

const App = (): JSX.Element => {
    const themeMode = process.env.THEME_MODE;
    return (
        <div>
            <Text size="lg">텍스트컴포넌트</Text>
        </div>
    );
};

export default App;
```

#### Common Options (MD 파일 예제로 옵션은 맞지 않음!! 주의!!)

| Name          | Type     | Default    | Description                                                                                                       |
| ------------- | -------- | ---------- | ----------------------------------------------------------------------------------------------------------------- |
| size          | string   | `md`       | TEXT 컴포넌트 font 크기 지정                                                                                      |
| id            | string   | `required` | 생성 대상 Player `ID` 지정                                                                                        |
| url           | string   | `required` | vurix or realhub(원본소스타입) -> `///[vms_id]/[dev_serial]/[channel]/[media]`                                    |
| protocol      | string   | `required` | 프로토콜 정보, `http` or `https`                                                                                  |
| host          | string   | `required` | Host 정보, 접속 Host URL 또는 사용 할 Media Server Host URL                                                       |
| transcode     | number   | `required` | 인코딩 요청 값, `-1`=인코딩 적용 X, `0`=원본, `-1, 0을 제외한 최소 값은 32`                                       |
| startDate     | number   |            | 저장 영상 요청 시작 `utc datetime` (실시간 재생 시 옵션 적용 X )                                                  |
| endDate       | number   |            | 저장 영상 요청 종료 `utc datetime` (실시간 재생 시 옵션 적용 X )                                                  |
| autoPlay      | boolean  | `false`    | 자동 재생 여부                                                                                                    |
| playSpeed     | number   | `1`        | 저장 영상 배속 옵션, 해당 옵션이 없을 경우, 배속 버튼도 표시 되지 않으며 세가지 옵션 제공 `1, 2(2배속), 4(4배속)` |
| capture       | boolean  | `false`    | 화면 캡쳐 버튼 활성화 여부                                                                                        |
| scale         | number   |            | 저장영상 구간 눈금 표시 여부 및 눈금 표시 갯수                                                                    |
| buttonTooltip | boolean  | `false`    | 플레이어 컨트롤 영역 버튼 `Tooltip` 표시 여부                                                                     |
| errorMsgFunc  | Function |            | 에러 발생 `콜백` 함수                                                                                             |
