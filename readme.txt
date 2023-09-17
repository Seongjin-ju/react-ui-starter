# stroy book 설치
    - 터미널: npx sb init
# story book 실행
    - 터미널: npm run storybook
    - port: 6006
# story book 컴포넌트 작성 예시
    - src/components 아래 .stories.tsx 참고
# npm publish 순서
    1. 컴포넌트 개발 수행
    2. 터미널: npm run build
        -> rollUp 번들러를 이용한 빌드 처리
        -> 결과물은 최상위 /dist 디렉토리
    3. package.json version 변경 (버전 변경이 없으면 publish error)
    4. 팀즈 일반 채널 사내 npm 서버 퍼블리시 참고
        -> https://teams.microsoft.com/l/message/19:d496b181b4704a12b3b5ef2eaf880be7@thread.skype/1658472453065?tenantId=651e3525-894f-465a-bb0f-7eba7c251b80&groupId=cccee6a3-d39b-4677-8853-ddbd1facda1b&parentMessageId=1658472453065&teamName=TMS%ED%94%8C%EB%9E%AB%ED%8F%BC%EB%B6%80%EB%AC%B8&channelName=%EC%9D%BC%EB%B0%98&createdTime=1658472453065
        -> npm login > publish