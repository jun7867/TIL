# Git 이란?

VSC 분산형, 인터넷에 연결이 안돼도 사용 가능하다.

버전 관리 시스템. (변경된 사항뿐 아니라 프로젝트 전체적인 내용을 가지고 있다.) 

브랜치들 사이에 자유로운 이동이 가능하다.

쉽고 빠르고 오픈소스이고 무료이다.

# Setup

### iTerm2

그냥 터미널보다 iTerm2 를 사용하는게 더 편하다. 

### sourceTree

UI적으로 시각적으로 git 확인 가능.

# 명령어 정리 (mac)

git config —list : 모든 설정들 확인

git config —global -e : 터미널에서 확인 가능

git config —global [user.name](http://user.name) "Jun" 

git config —global [user.email](http://user.email) "jjune095@gmail.com"

git config —global core.autocrlf input  : 운영체제마다 줄바꿈 문자열을 자동으로 통일시켜줌 (\r\n , \n)

git config —global [alias.st](http://alias.st) status : 이건 단축키를 만든다는 뜻으로 git status를 git st의 단축키로 바꿔줌.

git init : 초기화

rm -rf .git : git 제거

git status : 상태 확인

# Workflow

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0c29bfb9-7736-4d49-b631-dfc840eab1fb/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0c29bfb9-7736-4d49-b631-dfc840eab1fb/Untitled.png)

1. **작업 공간 (working directory)** : 작업하는 공간
2. **버전 히스토리 준비 (staging area)** : git add를 하면 여기로 넘어옴.
3. **.git directory** : commit을 하면 여기로 넘어옴.

⇒ check out을 통해서 이전 버전으로 돌아갈 수 있다.

⇒ push를 통해서 서버에 저장할 수 있다. (로컬에만 있으면 자료가 삭제될 수도 있으니)

## gitignore

깃허브에 올리고 싶지 않은 파일들이 있다면 .gitignore에 추가해주면 된다.

## git diff

파일 비교

git config —global -e 를 한 다음 밑에 코드를 추가한다.

```jsx
[diff]
	toll=vscode
[difftool "vscode"]
	cmd = code --wait --diff $LOCAL $REMOTE
```

git difftool 을 사용하면 vscode에서 파일 비교를 할 수 있다. (어떤게 변경되었는지 확인 가능)

## commit 기준

기능별로 세분화해서 commit

commit message는 의미있게 작성. 

버그를 하나 고칠때 그 버그만 고치고 커밋해야한다. 여러개의 버그를 고치고 커밋하면 나중에 유지보수시 힘듬.
