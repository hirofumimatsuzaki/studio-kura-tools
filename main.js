const sections = [
  {
    id: "daily-tools",
    label: "毎日使う",
    title: "毎日使うツール",
    description: "日々の改善依頼や小さな業務整理の入口として使うツールです。",
    tools: [
      {
        name: "Mini Task",
        nameJa: "ミニタスク",
        href: "https://minitask-7bbb5.firebaseapp.com/",
        status: "利用できます",
        description:
          "日々の改善アイデア、Annaへの整理依頼、Codexへの実装依頼を管理するツール。"
      },
      {
        name: "Place Team Planner",
        nameJa: "チーム配置プランナー",
        href: "https://minitask-7bbb5.firebaseapp.com/place-team-planner.html",
        status: "利用できます",
        description:
          "チームの配置や担当を整理し、現場の作業計画を確認するためのツール。"
      }
    ]
  },
  {
    id: "residence-exhibition-tools",
    label: "レジデンス・展示",
    title: "レジデンス・展示ツール",
    description: "アーティスト情報の登録、展示告知、キャプション作成に使う運営ツールです。",
    tools: [
      {
        name: "Artist & Residence Registration",
        nameJa: "アーティスト・レジデンス登録",
        href: "https://script.google.com/a/macros/studiokura.com/s/AKfycbwWGmeLH7Jk7S1wRLpUHfaMmfdW9X6bSNHXvICK9MQz8TjduGz3xZC0j-HCOSbbq7A3/exec",
        status: "利用できます",
        description:
          "アーティスト情報、滞在期間、部屋、支払い、展示情報を登録するツール。"
      },
      {
        name: "Exhibition Post Generator",
        nameJa: "展示投稿ジェネレーター",
        href: "https://script.google.com/a/macros/studiokura.com/s/AKfycbx6hdivF24e9TCMkpslV54P4QxPJWHlf4uAvd_yUG_YEHsCsMzZEtHAsM-NmZRhiHK7/exec",
        status: "利用できます",
        description:
          "展示告知文、SNS投稿文、Web掲載用テキストを作成するツール。"
      },
      {
        name: "Exhibition Caption Tool",
        nameJa: "展示キャプション整形ツール",
        href: "https://hirofumimatsuzaki.github.io/exhibition-caption-tool/",
        status: "利用できます",
        description:
          "展示用キャプションを整形し、印刷しやすい形にするツール。"
      },
      {
        name: "Artist Database",
        nameJa: "アーティストデータベース",
        href: "https://hirofumimatsuzaki.github.io/VisualizingKura/",
        status: "利用できます",
        description:
          "過去・現在のアーティスト情報を検索、確認、可視化するためのツール。"
      }
    ]
  },
  {
    id: "planned-tools",
    label: "開発予定",
    title: "開発予定ツール",
    description: "今後、業務改善ポータルに追加していく予定のツールです。",
    planned: [
      {
        name: "メール返信アシスタント",
        description: "問い合わせや日程調整メールの返信文を整理するためのツール。"
      },
      {
        name: "レジデンス進行チェックリスト",
        description: "到着前、滞在中、展示前後の確認事項を管理するためのツール。"
      },
      {
        name: "展示アーカイブ",
        description: "展示履歴、作品情報、告知文、記録写真を整理するためのツール。"
      }
    ]
  }
];

function createSection(section) {
  const element = document.createElement("section");
  element.className = "section";
  element.setAttribute("aria-labelledby", `${section.id}-title`);

  const cards = section.tools ?? section.planned;
  const renderer = section.tools ? createToolCard : createPlannedCard;

  element.innerHTML = `
    <div class="section-heading">
      <p class="section-label">${section.label}</p>
      <h2 id="${section.id}-title">${section.title}</h2>
      <p>${section.description}</p>
    </div>
    <div class="card-grid" aria-label="${section.title}"></div>
  `;

  const grid = element.querySelector(".card-grid");
  cards.forEach((item, index) => {
    grid.append(renderer(item, index));
  });

  return element;
}

function createToolCard(tool) {
  const card = document.createElement("article");
  card.className = "tool-card";

  card.innerHTML = `
    <div class="card-top">
      <span class="card-index">${tool.status}</span>
      <h3 class="card-title">${tool.nameJa}</h3>
      <p class="card-title-sub">${tool.name}</p>
      <p class="card-description">${tool.description}</p>
    </div>
    <div class="card-footer">
      <span class="card-status">外部ツールを開きます</span>
      <a class="button-link" href="${tool.href}" target="_blank" rel="noreferrer">開く</a>
    </div>
  `;

  return card;
}

function createPlannedCard(tool) {
  const card = document.createElement("article");
  card.className = "coming-soon-card";

  card.innerHTML = `
    <div class="card-top">
      <span class="card-index">開発予定</span>
      <h3 class="card-title">${tool.name}</h3>
      <p class="card-description">${tool.description}</p>
    </div>
    <div class="card-footer">
      <span class="card-status">準備中</span>
    </div>
  `;

  return card;
}

const toolSections = document.querySelector("#tool-sections");

sections.forEach((section) => {
  toolSections.append(createSection(section));
});
