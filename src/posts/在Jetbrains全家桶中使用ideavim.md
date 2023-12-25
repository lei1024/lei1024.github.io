---

description: 使用ideavim
aside: false
date: 2023-11-22
tags:
  - Java
  - 开发工具
  - Vim
  - Jetbrains IDEA
---
# 在Jetbrains全家桶中使用ideavim
### 1.安装必备的一些插件

> AceJump

![image-20231122101601545](https://s2.loli.net/2023/11/22/ILyTEg3xt6f9u2G.png)

> IdeaVim-EasyMotion、IdeaVim-Quickscope、IdeaVim-Sneak、IdeaVimExtension、Which-Key

### 2.ideavim配置文件 .ideavimrc

```ini
":actionlist 可以查询所有的命令
let mapleader=','
Plug 'easymotion/vim-easymotion'
set file encodings=utf-8,gb2312,gbk,gb18030
set term encoding=utf-8
" Plugins
set ignorecase
set smartcase
set easymotion
set sneak
set quickscope

set encoding=prc
inoremap <c-e> <c-o>$
inoremap <c-a> <c-o>^
nmap <Space>jn i<CR><Esc>
nmap <Space>jo i<CR><Esc>k$
nmap <Space>sv :vsp<CR>
nmap <Space>sg :sp<CR>
nmap <Space>sq :q<CR>
nmap <Space>sQ :qa<CR>
nmap <Space>sa ggVG
nmap <Leader><Space> :nohl<CR>
nmap <Space><CR> o<Esc>
nmap <c-h> <c-w>h
nmap <c-j> <c-w>j
nmap <c-k> <c-w>k
nmap <c-l> <c-w>l
set clipboard=unnamed
map Y y$
map D d$
"vmap p "_dp



"set nu
"set rnu
set ideajoin
set surround
set matchit
" 突出显示当前行
set cursorline
" 在状态栏显示正在输入的命令
set showcmd
"set multiple-cursors
set commentary
set ReplaceWithRegister
set exchange
set argtextobj
set highlightedyank
set which-key
" -- which key --
set notimeout
"let g:WhichKey_ShowVimActions = "true"
set timeoutlen = 5000
" 相对当前行行数显示
" set relativenumber
set scrolloff=3
set history=100000
set relativenumber
set hlsearch
set incsearch
" 去掉搜索高亮
nnoremap <leader>/ :nohls<CR>
" clear the highlighted search result
nnoremap <Leader>sc :nohlsearch<CR>
"set vim-paragraph-motion
set NERDTree

nmap <Leader>ed <Action>(ShowErrorDescription)
nmap <Leader>me <Action>(ShowPopupMenu)
    " 选择模式扩大选择范围
vmap v <Action>(EditorSelectWord)
" 选择模式缩小选择范围
vmap V <Action>(EditorUnSelectWord)
    " 多光标选中单词
nmap <Leader>va <Action>(SelectAllOccurrences)
vmap <Leader>va <Action>(SelectAllOccurrences)

set showmode
"set vim-textobj-entire
set clipboard+=ideaputset ideajoinset clipboard+=ideaput


nmap H :action PreviousTab<CR>
nmap L :action NextTab<CR>

"nmap <C-m> :action SelectNextOccurrence<cr>
"xmap <C-m> :action SelectNextOccurrence<cr>
nmap <C-s> :action FindNext<cr>
xmap <C-s> :action FindNext<cr>
"FindPrevious
nmap <C-o> :action UnselectPreviousOccurrence<cr>
xmap <C-o> :action UnselectPreviousOccurrence<cr>
nmap <S-C-m> :action SelectAllOccurrences<cr>
xmap <S-C-m> :action SelectAllOccurrences<cr>

" Do incremental searching.
nnoremap [[ :action MethodUp<CR>
nnoremap ]] :action MethodDown<CR>

" 清除当前行,撤销重写
“ 输入模式下，dd映射两个命令，返回普通模式，光标移动到最开始，C命令
"inoremap dd <ESC>:normal ddO<CR>i
"inoremap dw <esc>diw<CR>i
"输入模式下左右移动字符
inoremap <C-h> <Left>
inoremap <C-l> <Right>

"Move code up and down
inoremap <c-j> <Esc>:action MoveStatementDown<CR>i
inoremap <c-k> <Esc>:action MoveStatementUp<CR>i
inoremap <c-q> <Esc>:action QuickJavaDocL<CR>i
vnoremap J :action MoveStatementDown<CR>
vnoremap K :action MoveStatementUp<CR>
nnoremap <C-w> viw

inoremap <c-l> <Esc>:action EditorCompleteStatement<CR>
nnoremap <Space>t :action Refactorings.QuickListPopupAction<CR>
vnoremap <Space>t :action Refactorings.QuickListPopupAction<CR>
nnoremap <leader>t :action ActivateTerminalToolWindow<CR>
"nnoremap <leader>t :action TerminalOpenInTerminal<CR>
nnoremap <Space>q :action HideActiveWindow<CR>
"nnoremap <leader>e :e ~/.ideavimrc<CR>
"nnoremap <leader>kr :action IdeaVim.ReloadVimRc.reload<CR>
nnoremap <leader>n :action ContextRun<CR>
nnoremap <leader>b :action ShowNavBar<CR>
nnoremap <leader>p :action Back<CR>
nnoremap <leader>c :action ChooseRunConfiguration<CR>
nnoremap <leader>d :action ChooseDebugConfiguration<CR>
nnoremap <leader>s :action FileStructurePopup<CR>
nnoremap <Space>kr :action RunAnything<CR>
nnoremap <Space>kn :action ContextRun<CR>
nnoremap <Space>kl :action Git.Pull<CR>
nnoremap <Space>kc :action RunClass<CR>
nnoremap <Space>f :action GotoFile<CR>
nnoremap <leader>a :action GotoAction<CR>
nnoremap <leader>h :action HideAllWindows<CR>
nnoremap <Space>kf :action RerunFailedTests<CR>
nnoremap <Space>w :action GotoNextError<CR>
nnoremap <c-f> :action GotoNextError<CR>
nnoremap <Space>b :action GotoPreviousError<CR>
nnoremap <c-b> :action GotoPreviousError<CR>
nnoremap <Space>u :action FindUsages<CR>
nnoremap <c-z> :action ToggleDistractionFreeMode<CR>
" 搜索文件相关
nnoremap <leader>zc :action GotoClass<CR>
nnoremap <leader>za :action GotoAction<CR>
nnoremap <leader>zh :action RecentChangedFiles<CR>
nnoremap <leader>zf :action GotoFile<CR>
nnoremap <leader>zd :action ActivateDebugToolWindow<CR>
nnoremap <leader>zr :action ActivateRunToolWindow<CR>
nnoremap <leader>zs :action ShelvedChangesToolbar<CR>
nnoremap <leader>zt :action ActivateTODOToolWindow<CR>
nnoremap <leader>zv :action ActivateVersionControlToolWindow<CR>
nnoremap <leader>zb :action ShowBookmarks<CR>
nnoremap <leader>zp :action ActivateProjectToolWindow<CR>
noremap  <leader>zm <ESC>:action GotoSymbol<CR>

" 关闭当前标签页
nnoremap <leader>qq :q<CR>
nnoremap <leader>qa :action CloseAllEditors<CR>
nnoremap <leader>qu :action CloseAllUnmodifiedEditors<CR>
nnoremap <leader>qo :action CloseAllEditorsButActive<CR>

" 代码跳转相关
" 不用leader的话g没有任何意义，所以必须要加leader
nnoremap <leader>gd :action GotoDeclaration<CR>
nnoremap <leader>gi :action GotoImplementation<CR>
nnoremap <leader>gf :action FileStructurePopup<CR>
nnoremap <leader>gc :action EditorContextInfo<CR>
nnoremap <leader>gh :action TypeHierarchy<CR>
nnoremap <leader>gl :action Forward<CR>
nnoremap <leader>ge :action RecentFiles<CR>
nnoremap <leader>go :action RecentProjectListGroup<CR>
nnoremap <leader>gs :action GotoSuperMethod<CR>
nnoremap <leader>gt :action GotoTest<CR>
noremap <leader>gj <ESC>:action SliceBackward<CR>
noremap <leader>gk <ESC>:action SliceForward<CR>
noremap <leader>gg <ESC>:action Generate<CR>
noremap <leader>gq <ESC>:action CloseEditor<CR>
nnoremap <leader>gn g*
nnoremap <leader>gp g#


    " 窗口管理相关
nnoremap <leader>wf :action HideAllWindows<CR>
nnoremap <leader>wF :action ToggleFullScreen<CR>
nnoremap <leader>wm :action VimWindowOnly<CR>
nnoremap <leader>w- :action VimWindowSplitHorizontal<CR>
nnoremap <leader>w/ :action VimWindowSplitVertical<CR>
nnoremap <leader>wd :q<CR>
nnoremap <leader>wq :q<CR>
nnoremap <leader>wj :action VimWindowDown<CR>
nnoremap <leader>wk :action VimWindowUp<CR>
nnoremap <leader>wl :action VimWindowRight<CR>
nnoremap <leader>wh :action VimWindowLeft<CR>
nnoremap <leader>wn :action VimWindowNext<CR>
nnoremap <leader>wp :action VimWindowPrev<CR>

" 运行相关
nnoremap <leader>eb :action ChooseRunConfiguration<CR>
nnoremap <leader>ec :action CompileDirty<CR>
nnoremap <leader>ed :action Debug<CR>
nnoremap <leader>eD :action DebugClass<CR>
nnoremap <leader>er :action Run<CR>
nnoremap <leader>eR :action RunClass<CR>

" AceJump集成
nnoremap <leader>sj :action AceAction<CR>
nnoremap <leader>sJ :action AceTargetAction<CR>
nnoremap <leader>sg :action AceLineAction<CR>

" code代码修改相关
nnoremap <leader>js :action SurroundWith<CR>
nnoremap <leader>jp :action SmartSplit<CR>
nnoremap <leader>jt :action SurroundWithLiveTemplate<CR>
nnoremap <leader>j= :action FormatElement<CR>
nnoremap <leader>j+ :action ReformatCode<CR>
    " 视野左右移动
nnoremap zh 50zh
nnoremap zl 50zl
" 剪贴板
" 删除不剪切
nnoremp d "_d
nnoremap dd "_dd
nnoremap D "_D
" nnoremap <leader>d ""d
" nnoremap <leader>dd ""dd
" nnoremap <leader>D ""D
nnoremap c "_c
nnoremap cc "_cc
nnoremap C "_C
" nnoremap <leader>c ""c
" nnoremap <leader>cc ""cc
" nnoremap <leader>C ""C
vnoremap d "_d

vnoremap D "_D
" vnoremap <leader>d ""d
" vnoremap <leader>dd ""dd
" vnoremap <leader>D ""D
vnoremap c "_c
vnoremap cc "_cc
vnoremap C "_C
" vnoremap <leader>c ""c
" vnoremap <leader>cc ""cc
" vnoremap <leader>C ""C
vnoremap p "_dp
vnoremap P "_dP
" 删除不剪切
" 组合命令删除不剪切
nnoremap diw "_diw
nnoremap di" "_di"
nnoremap di' "_di'
nnoremap di( "_di(
nnoremap di[ "_di[
nnoremap di{ "_di{
nnoremap di< "_di<

nnoremap daw "_daw
nnoremap da" "_da"
nnoremap da' "_da'
nnoremap da( "_da(
nnoremap da[ "_da[
nnoremap da{ "_da{
nnoremap da< "_da<

nnoremap ciw "_ciw
nnoremap ci" "_ci"
nnoremap ci' "_ci'
nnoremap ci( "_ci(
nnoremap ci[ "_ci[
nnoremap ci{ "_ci{
nnoremap ci< "_ci<

nnoremap caw "_caw
nnoremap ca" "_ca"
nnoremap ca' "_ca'
nnoremap ca( "_ca(
nnoremap ca[ "_ca[
nnoremap ca{ "_ca{
nnoremap ca< "_ca<

" 快速跳转行首与行尾
nnoremap <C-l> $
nnoremap <C-h> ^
vnoremap <C-l> $
vnoremap <C-h> ^
" 快速跳转行首与行尾
" 移动多行
noremap <C-j> 5j
noremap <C-k> 5k

" 保存行(不含换行符)
nnoremap yir ^v$y
nnoremap yar ^v$y
" 保存行(不含换行符)
" 删除行(不含换行符)
nnoremap dir ^v$"_d
nnoremap dar ^v$"_d
" 删除行(不含换行符)
" 删除行(不含换行符)
nnoremap cir ^v"_C
nnoremap car ^v"_C
" 删除行(不含换行符)
" 删除&复制行(不含换行符)
nnoremap yxr ^v$x
" 删除&复制行(不含换行符)
" 选中行(不含换行符)
nnoremap vir ^v$
nnoremap var ^v$
" 选中行(不含换行符)
" 框选指定符号结束的多行
nnoremap vs( ^V/(<CR>%
nnoremap vs{ ^V/{<CR>%
nnoremap vs[ ^V/[<CR>%
nnoremap vs) ^V%
nnoremap vs} ^V%
nnoremap vs] ^V%
nnoremap vs; ^V/;<CR>

inoremap jk <Esc>
inoremap kj <Esc>
"inoremap <Space><Space> <Esc>
"nnoremap <Space>u :action ShowUsages<CR>
"gD可以替代这个

"Refactor
nnoremap <Space>n :action Inline<CR>
vnoremap <Space>n :action Inline<CR>

"Extract Method
nnoremap <Space>m :action ExtractMethod<CR>
nnoremap <c-m> :action ExtractMethod<CR>
vnoremap <Space>m :action ExtractMethod<CR>
vnoremap <c-m> :action ExtractMethod<CR>

nnoremap <Space>v :action IntroduceVariable<CR>
vnoremap <Space>v :action IntroduceVariable<CR>
nnoremap <Space>i :action ShowIntentionActions<CR>
nnoremap <c-i> :action ShowIntentionActions<CR>
nnoremap <Space>e :action ReformatCode<CR>
nnoremap <Space>l :action ReformatCode<CR>
nnoremap <Space>o :action Move<CR>
noremap \r <ESC>:source ~/.ideavimrc<CR>
"Rename
nnoremap <Space>r :action RenameElement<CR>
nnoremap <c-r> :action RenameElement<CR>
" g
nmap U :action $Redo<CR>
nnoremap <Space>p :action IntroduceParameter<CR>
nnoremap <Space>c :action ExtractClass<CR>

nnoremap <leader>v :action Vcs.QuickListPopupAction<CR>
nnoremap <Space>kh :action TypeHierarchy<CR>



" l
"noremap gl <ESC>:action <CR>
"打断点
nnoremap <Leader>bb :action ToggleLineBreakpoint<CR>

"查看所有断点
nnoremap <Leader>br :action ViewBreakpoints<CR>
" z
"noremap gz <ESC>:action <CR>
" close all but this

" compile
nnoremap <leader>r :action Maven.Reimport<CR>
" v
"noremap gv <ESC>:action <CR>
" b

nnoremap <leader>f :action FindInPath<CR>
```
