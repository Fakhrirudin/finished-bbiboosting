// client-side-component.js

import { useSession } from 'next-auth/react';

export default function ClientSideComponent() {
  const { data: session } = useSession();
}
