import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Robber from '@/assets/villager-images/Robber.png';

export default function VillagerCard() {
  return (
    <Card className="bg-blue-950">
      <CardHeader>
        <CardTitle className="text-center text-white">Villager Name</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Image
          src={Robber}
          alt="Robber"
          width={0}
          height={0}
          sizes="50vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </CardContent>
    </Card>
  );
}
