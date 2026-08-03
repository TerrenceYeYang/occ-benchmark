(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();function n(e){if(typeof e!="object"||e===null)throw new Error("benchmark result is not an object");return e}function u(e){const s=n(e),i=n(s.summary),t=n(s.core),a=n(s.integration),r=n(a.process_e2e),o=n(a.ios_simulator),m=n(s.environment),c=n(s.module),l=n(s.runner);if(s.schema_version!==1||typeof s.generated_at!="string"||typeof s.source_revision!="string"||c.distribution!=="closed-source native artifact"||c.artifact_published!==!0||typeof c.artifact_url!="string"||!c.artifact_url.startsWith("https://github.com/TerrenceYeYang/occ-benchmark/releases/download/")||typeof c.artifact_sha256!="string"||!/^[a-f0-9]{64}$/u.test(c.artifact_sha256)||l.id!=="occ-benchmark-runner"||l.execution!=="local-only"||l.accepts_algorithm_uploads!==!1||typeof l.runner_sha256!="string"||i.core_throughput_status!=="passed"||i.process_e2e_status!=="passed"||i.ios_simulator_status!=="passed"||t.status!=="passed"||r.status!=="passed"||o.status!=="passed"||typeof t.encode_mib_per_second!="number"||typeof t.decode_mib_per_second!="number"||typeof r.hash_matches_manifest!="boolean"||typeof o.hash_matches_manifest!="boolean"||!Array.isArray(s.platform_matrix)||!Array.isArray(s.evidence_levels)||!Array.isArray(s.excluded_from_claims)||typeof m.cpu!="string")throw new Error("benchmark result schema is invalid or contains a failed required gate");return e}async function h(){const e=await fetch("./benchmark-results.json",{cache:"no-store"});if(!e.ok)throw new Error(`benchmark result HTTP ${e.status}`);return u(await e.json())}const d=document.querySelector("#app");if(!d)throw new Error("Missing #app");function p(e){return`<span class="matrix-status ${e}">${e==="passed"?"PASS":"NOT RUN"}</span>`}function b(e){const s=e.integration.ios_simulator,i=e.integration.process_e2e;return`
    <header class="bench-header">
      <div class="bench-brand"><span>OCC</span> CORE BENCHMARK</div>
      <nav class="bench-nav" aria-label="Benchmark resources">
        <a href="./benchmark-results.json">RAW EVIDENCE</a>
        <span>OFFICIAL MODULE / BUILD 01</span>
      </nav>
    </header>
    <main class="bench-main">
      <section class="bench-hero">
        <div>
          <p class="bench-kicker">OCC / OPTICAL COMMUNICATION CORE</p>
          <h1>Evidence,<br><em>not claims.</em></h1>
          <p>面向 ISV 与独立开发者的跨平台协议核心。真机、仿真和模拟分别记账，让每一项性能声明都能追溯到对应证据。</p>
        </div>
        <aside class="bench-stamp">
          <span>REQUIRED GATES</span><strong>3 / 3</strong><b>ALL PASSED</b>
          <small>${new Intl.DateTimeFormat("zh-CN",{dateStyle:"medium",timeStyle:"short"}).format(new Date(e.generated_at))}<br>${e.environment.cpu}</small>
        </aside>
      </section>

      <section class="launch-grid" aria-label="Upcoming public artifacts">
        <article class="launch-card video-placeholder">
          <p>DEMO VIDEO</p>
          <div class="video-stage" aria-label="Demo video coming soon"><span>▶</span></div>
          <h2>真实流程，正在制作。</h2>
          <p>将展示从发送、光学传输到文件恢复的完整体验，并明确对应的设备与测试条件。</p>
          <b>COMING SOON</b>
        </article>
        <article class="launch-card core-placeholder">
          <p>CORE LIB DISTRIBUTION</p>
          <h2>光传模块 v1.0 已开放二进制评估。</h2>
          <p>ISV 与独立开发者可在自己的产品、设备和隐私边界内完成集成与跑分。当前包为 macOS arm64；其他平台按验证进度发布。</p>
          <ul>
            <li>稳定、版本化的 C ABI</li>
            <li>macOS arm64 — available</li>
            <li>Android / Windows / iOS Device / Linux — coming soon</li>
            <li>固定测试向量与 Benchmark Runner</li>
            <li>算法模块无需上传</li>
          </ul>
          <a class="download-button" href="${e.module.artifact_url}">DOWNLOAD v1.0 · macOS arm64</a>
          <b>RELEASE TAG v1.0.0 · FUTURE TAGS TBD</b>
        </article>
      </section>

      <section class="bench-section evidence-tiers" aria-labelledby="evidence-tier-title">
        <div class="bench-section-title"><span>01</span><div><p>EVIDENCE TIERS</p><h2 id="evidence-tier-title">真机 / 仿真 / 模拟</h2></div><small>同一模块，三层证据分别记账</small></div>
        <div class="tier-grid">
          <article class="tier-card physical">
            <div><span>PHYSICAL DEVICE</span>${p("not-run")}</div>
            <h3>真机</h3>
            <p>真实手机、显示屏、摄像头和完整光学链路。</p>
            <strong>暂无公开成绩</strong>
            <small>物理设备光学 E2E 尚未执行，因此不产生通过分数。</small>
          </article>
          <article class="tier-card simulator">
            <div><span>PLATFORM SIMULATOR</span>${p(s.status)}</div>
            <h3>仿真</h3>
            <p>自有模块由 iOS Simulator 原生宿主通过稳定 C ABI 调用。</p>
            <strong>${s.source_erasure_percent}% 擦除恢复</strong>
            <small>${s.platform} · ${s.transmitted_frames} frames · SHA-256 match<br>Android Emulator 尚未执行。</small>
            <b>首发自有模块成绩</b>
          </article>
          <article class="tier-card simulation">
            <div><span>PROTOCOL SIMULATION</span>${p(i.status)}</div>
            <h3>模拟</h3>
            <p>纯协议内存路径与独立故障信道，不涉及相机或真实屏幕。</p>
            <strong>30% 丢包恢复</strong>
            <small>4% corrupt · 12% duplicate · unordered delivery<br>${e.core.encode_mib_per_second.toFixed(2)} / ${e.core.decode_mib_per_second.toFixed(2)} MiB/s memory path</small>
          </article>
        </div>
      </section>

      <section class="metric-grid" aria-label="Official module metrics">
        <article><span>ENCODE</span><strong>${e.core.encode_mib_per_second.toFixed(2)}</strong><b>MiB/s</b><small>core memory path</small></article>
        <article><span>DECODE</span><strong>${e.core.decode_mib_per_second.toFixed(2)}</strong><b>MiB/s</b><small>${e.core.channel_erasure_percent}% deterministic erasure</small></article>
        <article><span>PROCESS E2E</span><strong>30%</strong><b>LOSS</b><small>authenticated hash match</small></article>
        <article><span>iOS SIM</span><strong>${s.source_erasure_percent}%</strong><b>ERASURE</b><small>${s.repair_frames} repairs → Complete</small></article>
      </section>

      <section class="bench-section module-proof">
        <div class="bench-section-title"><span>02</span><div><p>ARTIFACT IDENTITY</p><h2>成绩绑定到模块。</h2></div><small>${e.module.id} / v${e.module.version}</small></div>
        <div class="module-proof-grid">
          <div><span>C ABI</span><strong>${e.module.abi_version}</strong></div>
          <div><span>DISTRIBUTION</span><strong>Native core lib</strong></div>
          <div><span>MODULE UPLOAD</span><strong>Not required</strong></div>
          <div class="hash-cell"><span>ARTIFACT SHA-256</span><code>${e.module.artifact_sha256}</code></div>
        </div>
      </section>

      <section class="bench-section evidence-boundary">
        <div><p class="bench-kicker">FOR DEVELOPERS</p><h2>Build the application around a reusable core.</h2><p class="public-copy">平台 UI、摄像头和设备适配由应用负责；确定性的协议、恢复、完整性和结果分类由 Core lib 负责。</p></div>
        <div><p class="bench-kicker">NOT CLAIMED</p><ul>${e.excluded_from_claims.map(a=>`<li>${a}</li>`).join("")}</ul></div>
      </section>
    </main>
    <footer class="bench-footer">OCC official module · simulator evidence is never presented as physical-device evidence</footer>
  `}async function f(){d.innerHTML='<main class="bench-main"><section class="bench-loading"><span></span><p>LOADING EVIDENCE…</p></section></main>';try{d.innerHTML=b(await h())}catch(e){d.innerHTML=`<main class="bench-main"><section class="bench-error"><h1>Evidence unavailable.</h1><p>${e instanceof Error?e.message:"Unknown benchmark error"}</p></section></main>`}}f();
