# Word2Vec을 이용한 암호화 웹사이트

## 프로젝트 참여자

| 학과         | 학번     | 이름   | 역할분담                                        |
| ------------ | -------- | ------ | ----------------------------------------------- |
| 컴퓨터공학과 | 18101229 | 신현규 | Python 기반 DB 및 서버 구현, 암호 알고리즘 구현 |
| 컴퓨터공학과 | 18101281 | 최해솔 | 프로젝트 기획, 디자인, React 기반 프론트 개발   |

## 프로젝트 설명

지난 한 학기동안 자연어처리 강의를 들으며 배운 것을 어떻게 적용할 수 있을까 고민을 많이 했습니다.
저희가 떠올린 것은 **시저 암호**입니다. 이 암호는 주어진 문자열의 각 문자를 어떤 key값만큼 옮기는 간단한 치환 암호입니다. 하지만 텍스트 내 알파벳들의 빈도 수를 이용하면, 고정된 key값으로 구현된 시저 암호는 쉽게 복호화가 가능합니다.
이를 해결하기 위해 어떤 단어를 key값으로 이용해 변동적인 key값을 사용하는 **비게네르 암호**도 존재하지만, 저희는 대신에 Word2Vec과 Cosine Similarity를 이용해 key값을 구현해보기로 했습니다.

본 프로젝트는 다음 사항들이 구현되어 있습니다.

- 프로젝트 실행 시 데이터베이스가 초기화됩니다. 서버는 flask를 기반으로 실행되며 이 데이터베이스에 값을 저장하고 읽어옵니다.

- 입력으로 주어진 문자열의 알파벳 대소문자를 구현된 암호 알고리즘을 이용해 암호화하고, 고유한 key값과 암호문을 반환합니다. (암호화에 사용되는 key값이 아닌, 반환된 암호문에 대한 key값(id)입니다.)

- key값과 암호문 쌍이 올바를 경우 복호화 후 원문을 반환합니다.

- 암호화 알고리즘의 원리는 다음과 같습니다.
  - 알파벳 문자열이 주어지면 공백으로 구분한 단어의 개수를 분석합니다.
  - **spacy**의 **en_core_web_lg**을 기반으로 각 단어의 벡터를 구합니다.
  - 문자열을 순회하며 이웃한 단어의 Cosine Similarity를 계산한 후 100을 곱해 정수 부분을 구합니다. 이는 각 단어의 key값이 됩니다. 맨 끝 단어의 경우 앞에서 구한 key값들의 합을 적용합니다.
  - 이를 그대로 사용하는 경우 spacy만 있다면 누구나 해독이 가능하기 때문에, 추가로 난수를 더해줍니다.
  - 위의 과정을 거쳐 구해진 key값이 0인 경우 0 대신 난수값을 적용합니다.

- 데이터베이스에는 원문을 저장하지 않습니다. 대신 사용자에게 반환하는 key값과 암호문만을 저장하고 복호화 시 입력되는 key - 암호문 쌍이 데이터베이스에 저장된 값과 일치하는 경우 복호화를 수행해 원문을 돌려줍니다.

## 프로젝트 실행 방법

> Github에서 clone하여 로컬에서 실행해볼 수 있습니다.
- 이 프로젝트는 React 와 Flask 기반으로 개발되어, **"[그 외 정보](#info)"** 에 명시된 패키지가 준비된 로컬 환경에서만 작동합니다.
- 환경이 준비되었다면, npm start 명령어로 프로젝트 실행이 가능합니다.

## 프로젝트 실행 결과 예시

- 실행 시 초기 화면은 아래 이미지와 같습니다.

<img src="https://user-images.githubusercontent.com/81071456/169521370-b8507b23-3083-4072-a092-1cfba713eaa5.PNG"/>

- 실제 프로젝트 시연 영상입니다. 

## 그 외 정보 <a id = "info"><a/>

> 개발에 사용한 오픈소스 패키지 목록은 다음과 같습니다.

- [npm](https://www.npmjs.com/)
- [react](https://ko.reactjs.org/)
- [scikit-learn](https://scikit-learn.org/stable/)
- [spacy](https://spacy.io/)
- [flask](https://flask.palletsprojects.com/en/2.1.x/), [flask_cors](https://flask-cors.readthedocs.io/en/latest/)
- [json](https://www.json.org/json-en.html)
- [styled-components](https://styled-components.com/)
- [axios](https://axios-http.com/kr/docs/intro)
- [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start)

> 자세한 dependencies 정보는 [여기](https://github.com/NyaNyak/Word2Vec-crypto/network/dependencies)에서 확인 가능합니다.

> 아래는 프로젝트를 개발하면서 코드 인용 및 참고한 사이트 입니다.

- [티스토리 정구리의 우주정복](https://j-ungry.tistory.com/180?category=894695)

```
욕설 필터링 기능을 구현하면서 코드 인용 및 참고한 글입니다.
```
