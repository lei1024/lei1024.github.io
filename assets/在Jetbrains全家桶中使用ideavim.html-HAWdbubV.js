import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as i,f as l}from"./app-TLNZv_H7.js";const t={},a=l(`<h1 id="在jetbrains全家桶中使用ideavim" tabindex="-1"><a class="header-anchor" href="#在jetbrains全家桶中使用ideavim" aria-hidden="true">#</a> 在Jetbrains全家桶中使用ideavim</h1><h3 id="_1-安装必备的一些插件" tabindex="-1"><a class="header-anchor" href="#_1-安装必备的一些插件" aria-hidden="true">#</a> 1.安装必备的一些插件</h3><blockquote><p>AceJump</p></blockquote><figure><img src="https://s2.loli.net/2023/11/22/ILyTEg3xt6f9u2G.png" alt="image-20231122101601545" tabindex="0" loading="lazy"><figcaption>image-20231122101601545</figcaption></figure><blockquote><p>IdeaVim-EasyMotion、IdeaVim-Quickscope、IdeaVim-Sneak、IdeaVimExtension、Which-Key</p></blockquote><h3 id="_2-ideavim配置文件-ideavimrc" tabindex="-1"><a class="header-anchor" href="#_2-ideavim配置文件-ideavimrc" aria-hidden="true">#</a> 2.ideavim配置文件 .ideavimrc</h3><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>&quot;:actionlist 可以查询所有的命令
<span class="token key attr-name">let mapleader</span><span class="token punctuation">=</span><span class="token value attr-value">&#39;<span class="token inner-value">,</span>&#39;</span>
Plug &#39;easymotion/vim-easymotion&#39;
<span class="token key attr-name">set file encodings</span><span class="token punctuation">=</span><span class="token value attr-value">utf-8,gb2312,gbk,gb18030</span>
<span class="token key attr-name">set term encoding</span><span class="token punctuation">=</span><span class="token value attr-value">utf-8</span>
&quot; Plugins
set ignorecase
set smartcase
set easymotion
set sneak
set quickscope

<span class="token key attr-name">set encoding</span><span class="token punctuation">=</span><span class="token value attr-value">prc</span>
inoremap &lt;c-e&gt; &lt;c-o&gt;$
inoremap &lt;c-a&gt; &lt;c-o&gt;^
nmap &lt;Space&gt;jn i&lt;CR&gt;&lt;Esc&gt;
nmap &lt;Space&gt;jo i&lt;CR&gt;&lt;Esc&gt;k$
nmap &lt;Space&gt;sv :vsp&lt;CR&gt;
nmap &lt;Space&gt;sg :sp&lt;CR&gt;
nmap &lt;Space&gt;sq :q&lt;CR&gt;
nmap &lt;Space&gt;sQ :qa&lt;CR&gt;
nmap &lt;Space&gt;sa ggVG
nmap &lt;Leader&gt;&lt;Space&gt; :nohl&lt;CR&gt;
nmap &lt;Space&gt;&lt;CR&gt; o&lt;Esc&gt;
nmap &lt;c-h&gt; &lt;c-w&gt;h
nmap &lt;c-j&gt; &lt;c-w&gt;j
nmap &lt;c-k&gt; &lt;c-w&gt;k
nmap &lt;c-l&gt; &lt;c-w&gt;l
<span class="token key attr-name">set clipboard</span><span class="token punctuation">=</span><span class="token value attr-value">unnamed</span>
map Y y$
map D d$
&quot;vmap p &quot;_dp



&quot;set nu
&quot;set rnu
set ideajoin
set surround
set matchit
&quot; 突出显示当前行
set cursorline
&quot; 在状态栏显示正在输入的命令
set showcmd
&quot;set multiple-cursors
set commentary
set ReplaceWithRegister
set exchange
set argtextobj
set highlightedyank
set which-key
&quot; -- which key --
set notimeout
<span class="token key attr-name">&quot;let g:WhichKey_ShowVimActions</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">true</span>&quot;</span>
<span class="token key attr-name">set timeoutlen</span> <span class="token punctuation">=</span> <span class="token value attr-value">5000</span>
&quot; 相对当前行行数显示
&quot; set relativenumber
<span class="token key attr-name">set scrolloff</span><span class="token punctuation">=</span><span class="token value attr-value">3</span>
<span class="token key attr-name">set history</span><span class="token punctuation">=</span><span class="token value attr-value">100000</span>
set relativenumber
set hlsearch
set incsearch
&quot; 去掉搜索高亮
nnoremap &lt;leader&gt;/ :nohls&lt;CR&gt;
&quot; clear the highlighted search result
nnoremap &lt;Leader&gt;sc :nohlsearch&lt;CR&gt;
&quot;set vim-paragraph-motion
set NERDTree

nmap &lt;Leader&gt;ed &lt;Action&gt;(ShowErrorDescription)
nmap &lt;Leader&gt;me &lt;Action&gt;(ShowPopupMenu)
    &quot; 选择模式扩大选择范围
vmap v &lt;Action&gt;(EditorSelectWord)
&quot; 选择模式缩小选择范围
vmap V &lt;Action&gt;(EditorUnSelectWord)
    &quot; 多光标选中单词
nmap &lt;Leader&gt;va &lt;Action&gt;(SelectAllOccurrences)
vmap &lt;Leader&gt;va &lt;Action&gt;(SelectAllOccurrences)

set showmode
&quot;set vim-textobj-entire
<span class="token key attr-name">set clipboard+</span><span class="token punctuation">=</span><span class="token value attr-value">ideaputset ideajoinset clipboard+=ideaput</span>


nmap H :action PreviousTab&lt;CR&gt;
nmap L :action NextTab&lt;CR&gt;

&quot;nmap &lt;C-m&gt; :action SelectNextOccurrence&lt;cr&gt;
&quot;xmap &lt;C-m&gt; :action SelectNextOccurrence&lt;cr&gt;
nmap &lt;C-s&gt; :action FindNext&lt;cr&gt;
xmap &lt;C-s&gt; :action FindNext&lt;cr&gt;
&quot;FindPrevious
nmap &lt;C-o&gt; :action UnselectPreviousOccurrence&lt;cr&gt;
xmap &lt;C-o&gt; :action UnselectPreviousOccurrence&lt;cr&gt;
nmap &lt;S-C-m&gt; :action SelectAllOccurrences&lt;cr&gt;
xmap &lt;S-C-m&gt; :action SelectAllOccurrences&lt;cr&gt;

&quot; Do incremental searching.
nnoremap [[ :action MethodUp&lt;CR&gt;
nnoremap ]] :action MethodDown&lt;CR&gt;

&quot; 清除当前行,撤销重写
“ 输入模式下，dd映射两个命令，返回普通模式，光标移动到最开始，C命令
&quot;inoremap dd &lt;ESC&gt;:normal ddO&lt;CR&gt;i
&quot;inoremap dw &lt;esc&gt;diw&lt;CR&gt;i
&quot;输入模式下左右移动字符
inoremap &lt;C-h&gt; &lt;Left&gt;
inoremap &lt;C-l&gt; &lt;Right&gt;

&quot;Move code up and down
inoremap &lt;c-j&gt; &lt;Esc&gt;:action MoveStatementDown&lt;CR&gt;i
inoremap &lt;c-k&gt; &lt;Esc&gt;:action MoveStatementUp&lt;CR&gt;i
inoremap &lt;c-q&gt; &lt;Esc&gt;:action QuickJavaDocL&lt;CR&gt;i
vnoremap J :action MoveStatementDown&lt;CR&gt;
vnoremap K :action MoveStatementUp&lt;CR&gt;
nnoremap &lt;C-w&gt; viw

inoremap &lt;c-l&gt; &lt;Esc&gt;:action EditorCompleteStatement&lt;CR&gt;
nnoremap &lt;Space&gt;t :action Refactorings.QuickListPopupAction&lt;CR&gt;
vnoremap &lt;Space&gt;t :action Refactorings.QuickListPopupAction&lt;CR&gt;
nnoremap &lt;leader&gt;t :action ActivateTerminalToolWindow&lt;CR&gt;
&quot;nnoremap &lt;leader&gt;t :action TerminalOpenInTerminal&lt;CR&gt;
nnoremap &lt;Space&gt;q :action HideActiveWindow&lt;CR&gt;
&quot;nnoremap &lt;leader&gt;e :e ~/.ideavimrc&lt;CR&gt;
&quot;nnoremap &lt;leader&gt;kr :action IdeaVim.ReloadVimRc.reload&lt;CR&gt;
nnoremap &lt;leader&gt;n :action ContextRun&lt;CR&gt;
nnoremap &lt;leader&gt;b :action ShowNavBar&lt;CR&gt;
nnoremap &lt;leader&gt;p :action Back&lt;CR&gt;
nnoremap &lt;leader&gt;c :action ChooseRunConfiguration&lt;CR&gt;
nnoremap &lt;leader&gt;d :action ChooseDebugConfiguration&lt;CR&gt;
nnoremap &lt;leader&gt;s :action FileStructurePopup&lt;CR&gt;
nnoremap &lt;Space&gt;kr :action RunAnything&lt;CR&gt;
nnoremap &lt;Space&gt;kn :action ContextRun&lt;CR&gt;
nnoremap &lt;Space&gt;kl :action Git.Pull&lt;CR&gt;
nnoremap &lt;Space&gt;kc :action RunClass&lt;CR&gt;
nnoremap &lt;Space&gt;f :action GotoFile&lt;CR&gt;
nnoremap &lt;leader&gt;a :action GotoAction&lt;CR&gt;
nnoremap &lt;leader&gt;h :action HideAllWindows&lt;CR&gt;
nnoremap &lt;Space&gt;kf :action RerunFailedTests&lt;CR&gt;
nnoremap &lt;Space&gt;w :action GotoNextError&lt;CR&gt;
nnoremap &lt;c-f&gt; :action GotoNextError&lt;CR&gt;
nnoremap &lt;Space&gt;b :action GotoPreviousError&lt;CR&gt;
nnoremap &lt;c-b&gt; :action GotoPreviousError&lt;CR&gt;
nnoremap &lt;Space&gt;u :action FindUsages&lt;CR&gt;
nnoremap &lt;c-z&gt; :action ToggleDistractionFreeMode&lt;CR&gt;
&quot; 搜索文件相关
nnoremap &lt;leader&gt;zc :action GotoClass&lt;CR&gt;
nnoremap &lt;leader&gt;za :action GotoAction&lt;CR&gt;
nnoremap &lt;leader&gt;zh :action RecentChangedFiles&lt;CR&gt;
nnoremap &lt;leader&gt;zf :action GotoFile&lt;CR&gt;
nnoremap &lt;leader&gt;zd :action ActivateDebugToolWindow&lt;CR&gt;
nnoremap &lt;leader&gt;zr :action ActivateRunToolWindow&lt;CR&gt;
nnoremap &lt;leader&gt;zs :action ShelvedChangesToolbar&lt;CR&gt;
nnoremap &lt;leader&gt;zt :action ActivateTODOToolWindow&lt;CR&gt;
nnoremap &lt;leader&gt;zv :action ActivateVersionControlToolWindow&lt;CR&gt;
nnoremap &lt;leader&gt;zb :action ShowBookmarks&lt;CR&gt;
nnoremap &lt;leader&gt;zp :action ActivateProjectToolWindow&lt;CR&gt;
noremap  &lt;leader&gt;zm &lt;ESC&gt;:action GotoSymbol&lt;CR&gt;

&quot; 关闭当前标签页
nnoremap &lt;leader&gt;qq :q&lt;CR&gt;
nnoremap &lt;leader&gt;qa :action CloseAllEditors&lt;CR&gt;
nnoremap &lt;leader&gt;qu :action CloseAllUnmodifiedEditors&lt;CR&gt;
nnoremap &lt;leader&gt;qo :action CloseAllEditorsButActive&lt;CR&gt;

&quot; 代码跳转相关
&quot; 不用leader的话g没有任何意义，所以必须要加leader
nnoremap &lt;leader&gt;gd :action GotoDeclaration&lt;CR&gt;
nnoremap &lt;leader&gt;gi :action GotoImplementation&lt;CR&gt;
nnoremap &lt;leader&gt;gf :action FileStructurePopup&lt;CR&gt;
nnoremap &lt;leader&gt;gc :action EditorContextInfo&lt;CR&gt;
nnoremap &lt;leader&gt;gh :action TypeHierarchy&lt;CR&gt;
nnoremap &lt;leader&gt;gl :action Forward&lt;CR&gt;
nnoremap &lt;leader&gt;ge :action RecentFiles&lt;CR&gt;
nnoremap &lt;leader&gt;go :action RecentProjectListGroup&lt;CR&gt;
nnoremap &lt;leader&gt;gs :action GotoSuperMethod&lt;CR&gt;
nnoremap &lt;leader&gt;gt :action GotoTest&lt;CR&gt;
noremap &lt;leader&gt;gj &lt;ESC&gt;:action SliceBackward&lt;CR&gt;
noremap &lt;leader&gt;gk &lt;ESC&gt;:action SliceForward&lt;CR&gt;
noremap &lt;leader&gt;gg &lt;ESC&gt;:action Generate&lt;CR&gt;
noremap &lt;leader&gt;gq &lt;ESC&gt;:action CloseEditor&lt;CR&gt;
nnoremap &lt;leader&gt;gn g*
nnoremap &lt;leader&gt;gp g#


    &quot; 窗口管理相关
nnoremap &lt;leader&gt;wf :action HideAllWindows&lt;CR&gt;
nnoremap &lt;leader&gt;wF :action ToggleFullScreen&lt;CR&gt;
nnoremap &lt;leader&gt;wm :action VimWindowOnly&lt;CR&gt;
nnoremap &lt;leader&gt;w- :action VimWindowSplitHorizontal&lt;CR&gt;
nnoremap &lt;leader&gt;w/ :action VimWindowSplitVertical&lt;CR&gt;
nnoremap &lt;leader&gt;wd :q&lt;CR&gt;
nnoremap &lt;leader&gt;wq :q&lt;CR&gt;
nnoremap &lt;leader&gt;wj :action VimWindowDown&lt;CR&gt;
nnoremap &lt;leader&gt;wk :action VimWindowUp&lt;CR&gt;
nnoremap &lt;leader&gt;wl :action VimWindowRight&lt;CR&gt;
nnoremap &lt;leader&gt;wh :action VimWindowLeft&lt;CR&gt;
nnoremap &lt;leader&gt;wn :action VimWindowNext&lt;CR&gt;
nnoremap &lt;leader&gt;wp :action VimWindowPrev&lt;CR&gt;

&quot; 运行相关
nnoremap &lt;leader&gt;eb :action ChooseRunConfiguration&lt;CR&gt;
nnoremap &lt;leader&gt;ec :action CompileDirty&lt;CR&gt;
nnoremap &lt;leader&gt;ed :action Debug&lt;CR&gt;
nnoremap &lt;leader&gt;eD :action DebugClass&lt;CR&gt;
nnoremap &lt;leader&gt;er :action Run&lt;CR&gt;
nnoremap &lt;leader&gt;eR :action RunClass&lt;CR&gt;

&quot; AceJump集成
nnoremap &lt;leader&gt;sj :action AceAction&lt;CR&gt;
nnoremap &lt;leader&gt;sJ :action AceTargetAction&lt;CR&gt;
nnoremap &lt;leader&gt;sg :action AceLineAction&lt;CR&gt;

&quot; code代码修改相关
nnoremap &lt;leader&gt;js :action SurroundWith&lt;CR&gt;
nnoremap &lt;leader&gt;jp :action SmartSplit&lt;CR&gt;
nnoremap &lt;leader&gt;jt :action SurroundWithLiveTemplate&lt;CR&gt;
<span class="token key attr-name">nnoremap &lt;leader&gt;j</span><span class="token punctuation">=</span> <span class="token value attr-value">:action FormatElement&lt;CR&gt;</span>
nnoremap &lt;leader&gt;j+ :action ReformatCode&lt;CR&gt;
    &quot; 视野左右移动
nnoremap zh 50zh
nnoremap zl 50zl
&quot; 剪贴板
&quot; 删除不剪切
nnoremp d &quot;_d
nnoremap dd &quot;_dd
nnoremap D &quot;_D
&quot; nnoremap &lt;leader&gt;d &quot;&quot;d
&quot; nnoremap &lt;leader&gt;dd &quot;&quot;dd
&quot; nnoremap &lt;leader&gt;D &quot;&quot;D
nnoremap c &quot;_c
nnoremap cc &quot;_cc
nnoremap C &quot;_C
&quot; nnoremap &lt;leader&gt;c &quot;&quot;c
&quot; nnoremap &lt;leader&gt;cc &quot;&quot;cc
&quot; nnoremap &lt;leader&gt;C &quot;&quot;C
vnoremap d &quot;_d

vnoremap D &quot;_D
&quot; vnoremap &lt;leader&gt;d &quot;&quot;d
&quot; vnoremap &lt;leader&gt;dd &quot;&quot;dd
&quot; vnoremap &lt;leader&gt;D &quot;&quot;D
vnoremap c &quot;_c
vnoremap cc &quot;_cc
vnoremap C &quot;_C
&quot; vnoremap &lt;leader&gt;c &quot;&quot;c
&quot; vnoremap &lt;leader&gt;cc &quot;&quot;cc
&quot; vnoremap &lt;leader&gt;C &quot;&quot;C
vnoremap p &quot;_dp
vnoremap P &quot;_dP
&quot; 删除不剪切
&quot; 组合命令删除不剪切
nnoremap diw &quot;_diw
nnoremap di&quot; &quot;_di&quot;
nnoremap di&#39; &quot;_di&#39;
nnoremap di( &quot;_di(
nnoremap di[ &quot;_di[
nnoremap di{ &quot;_di{
nnoremap di&lt; &quot;_di&lt;

nnoremap daw &quot;_daw
nnoremap da&quot; &quot;_da&quot;
nnoremap da&#39; &quot;_da&#39;
nnoremap da( &quot;_da(
nnoremap da[ &quot;_da[
nnoremap da{ &quot;_da{
nnoremap da&lt; &quot;_da&lt;

nnoremap ciw &quot;_ciw
nnoremap ci&quot; &quot;_ci&quot;
nnoremap ci&#39; &quot;_ci&#39;
nnoremap ci( &quot;_ci(
nnoremap ci[ &quot;_ci[
nnoremap ci{ &quot;_ci{
nnoremap ci&lt; &quot;_ci&lt;

nnoremap caw &quot;_caw
nnoremap ca&quot; &quot;_ca&quot;
nnoremap ca&#39; &quot;_ca&#39;
nnoremap ca( &quot;_ca(
nnoremap ca[ &quot;_ca[
nnoremap ca{ &quot;_ca{
nnoremap ca&lt; &quot;_ca&lt;

&quot; 快速跳转行首与行尾
nnoremap &lt;C-l&gt; $
nnoremap &lt;C-h&gt; ^
vnoremap &lt;C-l&gt; $
vnoremap &lt;C-h&gt; ^
&quot; 快速跳转行首与行尾
&quot; 移动多行
noremap &lt;C-j&gt; 5j
noremap &lt;C-k&gt; 5k

&quot; 保存行(不含换行符)
nnoremap yir ^v$y
nnoremap yar ^v$y
&quot; 保存行(不含换行符)
&quot; 删除行(不含换行符)
nnoremap dir ^v$&quot;_d
nnoremap dar ^v$&quot;_d
&quot; 删除行(不含换行符)
&quot; 删除行(不含换行符)
nnoremap cir ^v&quot;_C
nnoremap car ^v&quot;_C
&quot; 删除行(不含换行符)
&quot; 删除&amp;复制行(不含换行符)
nnoremap yxr ^v$x
&quot; 删除&amp;复制行(不含换行符)
&quot; 选中行(不含换行符)
nnoremap vir ^v$
nnoremap var ^v$
&quot; 选中行(不含换行符)
&quot; 框选指定符号结束的多行
nnoremap vs( ^V/(&lt;CR&gt;%
nnoremap vs{ ^V/{&lt;CR&gt;%
nnoremap vs[ ^V/[&lt;CR&gt;%
nnoremap vs) ^V%
nnoremap vs} ^V%
nnoremap vs] ^V%
nnoremap vs; ^V/;&lt;CR&gt;

inoremap jk &lt;Esc&gt;
inoremap kj &lt;Esc&gt;
&quot;inoremap &lt;Space&gt;&lt;Space&gt; &lt;Esc&gt;
&quot;nnoremap &lt;Space&gt;u :action ShowUsages&lt;CR&gt;
&quot;gD可以替代这个

&quot;Refactor
nnoremap &lt;Space&gt;n :action Inline&lt;CR&gt;
vnoremap &lt;Space&gt;n :action Inline&lt;CR&gt;

&quot;Extract Method
nnoremap &lt;Space&gt;m :action ExtractMethod&lt;CR&gt;
nnoremap &lt;c-m&gt; :action ExtractMethod&lt;CR&gt;
vnoremap &lt;Space&gt;m :action ExtractMethod&lt;CR&gt;
vnoremap &lt;c-m&gt; :action ExtractMethod&lt;CR&gt;

nnoremap &lt;Space&gt;v :action IntroduceVariable&lt;CR&gt;
vnoremap &lt;Space&gt;v :action IntroduceVariable&lt;CR&gt;
nnoremap &lt;Space&gt;i :action ShowIntentionActions&lt;CR&gt;
nnoremap &lt;c-i&gt; :action ShowIntentionActions&lt;CR&gt;
nnoremap &lt;Space&gt;e :action ReformatCode&lt;CR&gt;
nnoremap &lt;Space&gt;l :action ReformatCode&lt;CR&gt;
nnoremap &lt;Space&gt;o :action Move&lt;CR&gt;
noremap \\r &lt;ESC&gt;:source ~/.ideavimrc&lt;CR&gt;
&quot;Rename
nnoremap &lt;Space&gt;r :action RenameElement&lt;CR&gt;
nnoremap &lt;c-r&gt; :action RenameElement&lt;CR&gt;
&quot; g
nmap U :action $Redo&lt;CR&gt;
nnoremap &lt;Space&gt;p :action IntroduceParameter&lt;CR&gt;
nnoremap &lt;Space&gt;c :action ExtractClass&lt;CR&gt;

nnoremap &lt;leader&gt;v :action Vcs.QuickListPopupAction&lt;CR&gt;
nnoremap &lt;Space&gt;kh :action TypeHierarchy&lt;CR&gt;



&quot; l
&quot;noremap gl &lt;ESC&gt;:action &lt;CR&gt;
&quot;打断点
nnoremap &lt;Leader&gt;bb :action ToggleLineBreakpoint&lt;CR&gt;

&quot;查看所有断点
nnoremap &lt;Leader&gt;br :action ViewBreakpoints&lt;CR&gt;
&quot; z
&quot;noremap gz &lt;ESC&gt;:action &lt;CR&gt;
&quot; close all but this

&quot; compile
nnoremap &lt;leader&gt;r :action Maven.Reimport&lt;CR&gt;
&quot; v
&quot;noremap gv &lt;ESC&gt;:action &lt;CR&gt;
&quot; b

nnoremap &lt;leader&gt;f :action FindInPath&lt;CR&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),s=[a];function d(r,v){return e(),i("div",null,s)}const m=n(t,[["render",d],["__file","在Jetbrains全家桶中使用ideavim.html.vue"]]);export{m as default};
