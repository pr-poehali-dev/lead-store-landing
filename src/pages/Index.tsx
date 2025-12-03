import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");

  const plans = [
    {
      name: "Стартовый",
      price: "15%",
      description: "от привлеченного оборота",
      features: [
        "Базовая техническая поддержка",
        "Маркетинговые материалы",
        "Личный кабинет партнера",
        "Еженедельные выплаты",
        "Обучающие материалы"
      ],
      highlight: false
    },
    {
      name: "Профессиональный",
      price: "25%",
      description: "от привлеченного оборота",
      features: [
        "Приоритетная поддержка 24/7",
        "Персональный менеджер",
        "Готовые воронки продаж",
        "Индивидуальные промо-коды",
        "Доступ к закрытым вебинарам",
        "Маркетинговый бюджет до 100K"
      ],
      highlight: true
    },
    {
      name: "Корпоративный",
      price: "35%",
      description: "от привлеченного оборота",
      features: [
        "Выделенная команда поддержки",
        "Белый лейбл решения",
        "Кастомная интеграция API",
        "Совместный маркетинг",
        "Ежедневные выплаты",
        "Эксклюзивные условия",
        "Участие в продуктовых решениях"
      ],
      highlight: false
    }
  ];

  const benefits = [
    {
      icon: "TrendingUp",
      title: "Высокая конверсия",
      description: "Наши лиды конвертируются в продажи в 3 раза лучше рынка"
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Валидация каждого лида через 3 канала верификации"
    },
    {
      icon: "Zap",
      title: "Мгновенная доставка",
      description: "Лиды поступают клиентам в режиме реального времени"
    },
    {
      icon: "Users",
      title: "5000+ партнеров",
      description: "Крупнейшая партнерская сеть в России"
    }
  ];

  const support = [
    {
      icon: "Code",
      title: "Техническая поддержка",
      items: [
        "API документация и SDK",
        "Интеграция за 2 часа",
        "Webhook уведомления",
        "Тестовая среда разработки",
        "Техподдержка 24/7"
      ]
    },
    {
      icon: "Megaphone",
      title: "Маркетинговая поддержка",
      items: [
        "Готовые landing pages",
        "Email-цепочки для продаж",
        "Баннеры и креативы",
        "Кейсы и презентации",
        "Скрипты для отдела продаж"
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partner signup:", email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
      
      <div className="relative">
        <header className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Rocket" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Lead Store
              </span>
            </div>
            <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
              Войти
            </Button>
          </nav>
        </header>

        <section className="container mx-auto px-4 py-20 text-center animate-fade-in">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
            Лидогенератор #1 в России
          </Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
            Зарабатывайте<br />с Lead Store
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Партнерская программа с прозрачными условиями, высокими комиссиями
            и полной поддержкой на каждом этапе
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
              <Input
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-card border-border sm:w-80"
                required
              />
              <Button type="submit" size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Стать партнером
              </Button>
            </form>
          </div>
          <div className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={20} className="text-primary" />
              <span>Без скрытых комиссий</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={20} className="text-primary" />
              <span>Выплаты от 7 дней</span>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg font-heading">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Тарифные планы
            </h2>
            <p className="text-muted-foreground text-lg">
              Выберите подходящий уровень партнерства
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-card/50 backdrop-blur border-border transition-all duration-300 hover:scale-105 ${
                  plan.highlight
                    ? "border-primary shadow-2xl shadow-primary/20 animate-glow"
                    : "hover:border-primary/50"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-none px-4 py-1">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {plan.price}
                    </div>
                    <p className="text-muted-foreground mt-2">{plan.description}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="CheckCircle" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${
                      plan.highlight
                        ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    Подключить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Поддержка партнеров
            </h2>
            <p className="text-muted-foreground text-lg">
              Мы предоставляем все инструменты для вашего успеха
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {support.map((item, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Icon name={item.icon as any} size={28} className="text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-heading">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {item.items.map((subItem, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{subItem}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <Card className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-primary/30 backdrop-blur">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Готовы начать зарабатывать?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Присоединяйтесь к 5000+ партнеров Lead Store и получите доступ
                к лучшим условиям на рынке лидогенерации
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                Начать сейчас
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </section>

        <footer className="container mx-auto px-4 py-12 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Rocket" size={16} className="text-white" />
              </div>
              <span className="font-heading font-bold">Lead Store</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Lead Store. Лидогенератор #1 в России
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">Документы</Button>
              <Button variant="ghost" size="sm">Поддержка</Button>
              <Button variant="ghost" size="sm">API</Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
