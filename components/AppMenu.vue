<template>
	<div>

		<div id="g-menu-wrap">
	
			<div class="g-menu-head">


				<div class="cover">
					<span>
						<img src="@/assets/img/cover.jpg" alt="">
					</span>
				</div>
				<div class="avatar-lg">
					<a href="/my/profile/">
						<span>
							<img src="@/assets/img/avatar.jpg" alt="">
						</span>
					</a>
				</div>
				<p>flower9292</p>

				<div class="logout">
					<a href="">
						<img src="@/assets/svg/icon_logout.svg" alt="ログアウト">
					</a>
				</div>

		<!--
				<div class="btn-signs">
					<ul>
						<li><a href="" target="_blank">ログイン</a></li>
						<li><a class="fill" href="" target="_blank">新規登録</a></li>
					</ul>
				</div>
		-->

			</div>

			<div class="g-menu-body">
				<nav id="g-menu">
					<ul>
						<li>
							<a href="#" target="_blank">
								<img src="@/assets/svg/icon_wallet.svg" alt="">
								<span>ウォレット</span>
							</a>
						</li>
						<li>
							<a href="/my/post/">記事管理</a>
						</li>
						<li>
							<a href="/my/notice/">全体お知らせ</a>
						</li>
						<li>
							<a href="/my/notice/">個別お知らせ</a>
						</li>
						<li class="hasChild">
							<em>言語設定</em>
							<ul>
								<li>
									<a href="">日本語</a>
								</li>
								<li>
									<a href="">English</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>

			<div class="g-menu-foot">
				<a class="logo-rakun" href="/">
					<img src="@/assets/svg/logo_white.svg" alt="RAKUN">
				</a>
				<aside>
					<ul>
						<li><a href="">利用規約</a></li>
						<li><a href="">プライバシーポリシー</a></li>
						<li><nuxt-link to="/company">運営会社</nuxt-link></li>
					</ul>
				</aside>
			</div>

		</div><!-- #g-menu-wrap -->

		<div id="btn-post">
			<a href="/my/post/">
				<img src="@/assets/svg/icon_pen.svg" alt="">
			</a>
		</div>

		<div id="overlay"></div>

	</div>
</template>